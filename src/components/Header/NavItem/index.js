import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

export default function NavItem({ path, icon, text }) {
	const navigate = useNavigate()
	return (
		<li className={styles.navItem} onClick={() => navigate(path)}>
			{icon && <span className={styles.navIcon}>{icon}</span>}
			{text && <span className={styles.navText}>{text}</span>}
		</li>
	)
}
