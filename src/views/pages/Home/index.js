import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Feed from 'containers/User/Home/Feed'
import Sidebar from 'containers/User/Home/Sidebar'
import Toolbar from 'containers/User/Home/Toolbar'
import styles from './index.module.scss'
import { getTimeLine } from 'data/slices/postSlice'
export default function Home() {
	const dispatch = useDispatch()
	const followPosts = useSelector(state => state.post.followPosts)

	const { followings } = useSelector(state => state.user)

	const timeline = followPosts.map(post => ({
		...followings.filter(user => user._id === post.userId)[0],
		...post,
	}))

	useEffect(() => {
		const userId = localStorage.getItem('userId')
		dispatch(
			getTimeLine({ userId, params: { page: 1, limit: 10 } }),
		)
	}, [dispatch])
	return (
		<div className={styles.container}>
			<Sidebar />
			<Feed posts={timeline} addPost />
			<Toolbar />
		</div>
	)
}
