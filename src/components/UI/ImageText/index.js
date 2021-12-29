import clsx from 'clsx'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

export default function index({
	image,
	text,
	subText,
	date,
	size,
	type,
	path,
}) {
	return (
		<Link to={path || '/'}>
			<div className={styles.container}>
				<img
					src={image}
					alt={''}
					className={clsx(
						styles[`image${size || 'medium'}`],
						{
							[styles.avatar]: type === 'avatar',
						},
					)}
				/>
				<div>
					<span
						className={styles[`text${size || 'medium'}`]}
					>
						{text}
						{subText && (
							<span
								className={styles.subText}
							>{`${subText}`}</span>
						)}
					</span>
					{date && <span>{date}</span>}
				</div>
			</div>
		</Link>
	)
}
