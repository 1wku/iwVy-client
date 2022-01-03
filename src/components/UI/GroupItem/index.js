import clsx from 'clsx'

import { ReactComponent as Personicon } from 'assets/icons/person.svg'
import styles from './index.module.scss'

export default function GroupItem({ icon, text, pointer }) {
	return (
		<li
			className={clsx(styles.container, {
				[styles.pointer]: pointer,
			})}
		>
			{icon !== '' ? (
				<img src={icon} className={styles.icon} alt="" />
			) : (
				<span  className={styles.iconSvg}>
					<Personicon />
				</span>
			)}
			<span className={styles.text}>{text}</span>
		</li>
	)
}
