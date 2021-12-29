import styles from './index.module.scss'

export default function InputBasic({ title, type, placeholder }) {
	return (
		<div className={styles.container}>
			<span className={styles.title}>{title}</span>
			<input
				type={type || 'text'}
				placeholder={placeholder}
				className={styles.input}
			/>
		</div>
	)
}
