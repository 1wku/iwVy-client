import * as timeago from 'timeago.js'

import styles from './index.module.scss'
import ImageText from '../ImageText'
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

export default function Post({ post }) {
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
				<Like />
				<Comment />
				<Share />
			</Bottombar>
		</div>
	)
}
