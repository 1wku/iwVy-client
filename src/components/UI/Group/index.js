import styles from './index.module.scss'
import clsx from 'clsx'

export default function Group({ children, label, ...props }) {
	return (
		<div
			className={clsx(styles.container, ...Object.keys(props))}
		>
			<span className={styles.label}>{label}</span>
			<ul className={styles.group}>{children}</ul>
		</div>
	)
}
