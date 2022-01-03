import { useState } from 'react'
import styles from './index.module.scss'

export default function InputBasic(props) {
	const { label, id, onChange, type, errorMessage, ...inputProps } =
		props
	const [focused, setFocused] = useState(false)


	const [hidePassword, setHidePassword] = useState(
		type === 'password',
	)

	const handleFocus = e => {
		setFocused(true)
	}

	return (
		<div className={styles.container}>
			<label className={styles.title} htmlFor={id}>
				{label}
			</label>
			<input
				className={styles.input}
				id={id}
				type={type}
				onChange={onChange}
				onBlur={handleFocus}
				focused={focused.toString()}
				{...inputProps}
			/>
			<span className={styles.errorMessage}>{errorMessage}</span>
		</div>
	)
}
