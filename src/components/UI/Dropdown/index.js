import React, { useState, useRef, useCallback } from 'react'
import { useClickOutside } from 'hooks'

import styles from './index.module.scss'

export default function Drop({ icon, children }) {
	const [open, setOpen] = useState(false)
	const menuRef = useRef()
	
	const handleClickOutside = useCallback(() => {
		setOpen(false)
	}, [])

	useClickOutside(menuRef, handleClickOutside)

	return (
		<div className={styles.container}>
			<span
				className={styles.icon}
				onClick={() => setOpen(!open)}
			>
				{icon}
			</span>
			{open && (
				<div ref={menuRef} className={styles.dropdown}>
					{children}
				</div>
			)}
		</div>
	)
}
