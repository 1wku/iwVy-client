import clsx from 'clsx'

import styles from './index.module.scss'

export default function BottonBasic({
	text,
	theme,
	color,
	fullWidth,
}) {
	return (
		<button
			className={clsx(
				styles.button,
				styles[`button${theme}`],
				styles[`button${color}`],
				{ [styles.fullWidth]: fullWidth },
			)}
		>
			{text}
		</button>
	)
}
