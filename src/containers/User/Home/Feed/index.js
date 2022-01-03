import { Post } from 'components/UI'
import AddPost from '../AddPost'
import styles from './index.module.scss'

export default function Feed({ posts, addPost }) {
	return (
		<div className={styles.container}>
			{addPost && <AddPost />}
			{posts.map((post, index) => (
				<Post key={index} post={post} />
			))}
		</div>
	)
}
