import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Personicon } from 'assets/icons/person.svg'
import styles from './index.module.scss'
import { IconWrapper } from '..'

export default function GroupItem({
	icon,
	text,
	pointer,
	id,
	svg,
	handleClick,
}) {
	const navigate = useNavigate()
	const defaultHandleClick = () => navigate(`/user/${id}`)
	return (
		<li
			className={clsx(styles.container, {
				[styles.pointer]: pointer,
			})}
			onClick={handleClick ? handleClick : defaultHandleClick}
		>
			{svg ? (
				<IconWrapper icon={icon} />
			) : icon !== '' && icon ? (
				<img src={icon} className={styles.icon} alt="" />
			) : (
				<span className={clsx(styles.iconSvg)}>
					<Personicon />
				</span>
			)}
			<span className={styles.text}>{text}</span>
		</li>
	)
}
