import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import defaultAvatar from 'assets/images/defaultAvatar.jpg'
import { ReactComponent as Loading } from 'assets/icons/loading.svg'
import { forwardRef } from 'react'

function ChatContainer({ children, labelImg }, ref) {
	const loading = useSelector(state => state.chat.loading)
	return (
		<div style={{ position: 'relative' }}>
			<div className={styles.container} ref={ref}>
				{children}
			</div>
			<span className={styles.imageLabel}>
				{loading ? (
					<Loading />
				) : (
					<img src={labelImg || defaultAvatar} alt="" />
				)}
			</span>
		</div>
	)
}

export default forwardRef(ChatContainer)