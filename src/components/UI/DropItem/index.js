import clsx from 'clsx'
import { IconWrapper } from '..'
import styles from './index.module.scss'

export default function GroupItem({
	icon,
	text,
	pointer,
	handleClick,
}) {
	return (
		<li
			className={clsx(styles.container, {
				[styles.pointer]: pointer,
			})}
			onClick={handleClick}
		>
			<span className={styles.text}>{text}</span>
			<IconWrapper icon={icon} />
		</li>
	)
}
