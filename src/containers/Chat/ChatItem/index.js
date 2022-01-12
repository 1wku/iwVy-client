import clsx from 'clsx'
import styles from './index.module.scss'
import React, { useState, useEffect, forwardRef } from 'react'
import { format } from 'timeago.js'

function MessItem({ text, mine, createdAt }, ref) {
	const [showTime, setShowTime] = useState(false)

	useEffect(() => {
		const timerId = setTimeout(() => {
			setShowTime(false)
		}, 3000)
		return () => clearTimeout(timerId)
	}, [showTime])

	return (
		<span
			className={clsx(styles.chatItem, {
				[styles.mine]: mine,
			})}
			onClick={() => setShowTime(!showTime)}
			ref={ref}
		>
			{text}
			{showTime && (
				<span className={clsx(styles.createdAt)}>
					{format(createdAt)}
				</span>
			)}
		</span>
	)
}

export default forwardRef(MessItem)
