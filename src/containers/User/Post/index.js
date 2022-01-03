import * as timeago from 'timeago.js'
import { toast } from 'react-toastify'

import styles from './index.module.scss'
import { ImageText } from 'components/UI'
import Topbar from './Topbar'
import Body from './Body'
import Bottombar from './Bottombar'
import { ReactComponent as Option } from 'assets/icons/threedot.svg'
import { ReactComponent as Like } from 'assets/icons/like.svg'
import { ReactComponent as Comment } from 'assets/icons/comment.svg'
import { ReactComponent as Share } from 'assets/icons/share.svg'
import { Dropdown, DropItem } from 'components/UI'
import { ReactComponent as Saveicon } from 'assets/icons/save.svg'
import { ReactComponent as WarningIcon } from 'assets/icons/warning.svg'
import { ReactComponent as Download } from 'assets/icons/download.svg'
import { ReactComponent as Url } from 'assets/icons/url.svg'
import { useDispatch } from 'react-redux'
import { getTimeLine, likePost } from 'data/slices/postSlice'

export default function Post({ post }) {
	const dispatch = useDispatch()

	const userId = localStorage.getItem('userId')

	const menuItems = [
		{
			icon: <Saveicon />,
			text: 'Save this post',
			handleClick: () => {},
		},
		{
			icon: <WarningIcon />,
			text: 'Unfollow this user',
			handleClick: () => {},
		},
		{
			icon: <Url />,
			text: "Copy post's URL",
			handleClick: () => {},
		},
		{
			icon: <Download />,
			text: 'Download this image',
			handleClick: () => {},
		},
	]

	const handleLikePost = () => {
		dispatch(likePost({ userId, postId: post._id })).then(res => {
			console.log('like', res)
			if (res.type === 'post/like&dislike/fulfilled') {
				dispatch(getTimeLine({ userId }))
			}
		})
	}

	return (
		<div className={styles.container}>
			<Topbar>
				<ImageText
					size="medium"
					type="avatar"
					image={post.avatar}
					text={post.username}
					date={timeago.format(post.createdAt)}
				/>
				<Dropdown icon={<Option />}>
					{menuItems.map(item => (
						<DropItem
							key={item.text}
							icon={item.icon}
							text={item.text}
							handleClick={item.handleClick}
						/>
					))}
				</Dropdown>
			</Topbar>
			<Body content={post.content} img={post.img} />
			<Bottombar>
				<DropItem
					icon={<Like />}
					text={post.likes.length}
					autoWidth
					liked={post.likes.includes(userId)}
					handleClick={handleLikePost}
				/>
				<DropItem
					icon={<Comment />}
					text={0}
					autoWidth
					liked={post.likes.includes(userId)}
					handleClick={() => {}}
				/>
				{/* <Share /> */}
			</Bottombar>
		</div>
	)
}
