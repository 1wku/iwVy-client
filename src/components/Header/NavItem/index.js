import { Link } from 'react-router-dom'
import styles from './index.module.scss'

export default function index({ path, icon, text }) {
	return (
		<li>
			<Link to={path || '/'} className={styles.navItem}>
				{icon && (
					<span className={styles.navIcon}>{icon}</span>
				)}
				{text && (
					<span className={styles.navText}>{text}</span>
				)}
			</Link>
		</li>
	)
}
