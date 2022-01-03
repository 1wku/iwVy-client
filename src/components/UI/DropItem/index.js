import clsx from 'clsx'
import { IconWrapper } from '..'
import styles from './index.module.scss'

export default function GroupItem({
	icon,
	text,
	pointer,
	handleClick,
	autoWidth,
	liked,
}) {
	return (
		<li
			className={clsx(styles.container, {
				[styles.pointer]: pointer,
				[styles.autoWidth]: autoWidth,
				[styles.liked]: liked,
			})}
			onClick={handleClick}
		>
			<span className={clsx(styles.text)}>{text}</span>
			<IconWrapper icon={icon} />
		</li>
	)
}
