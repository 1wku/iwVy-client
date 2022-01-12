import styles from './index.module.scss'
import { ReactComponent as Loading } from 'assets/icons/loading.svg'
import { ReactComponent as Setting } from 'assets/icons/setting.svg'
import { ReactComponent as Camera } from 'assets/icons/camera.svg'
import { useNavigate } from 'react-router-dom'

export default function Info({
	info,
	loading,
	own,
}) {
	const navigate = useNavigate()
	const handleSettingClick = () => {
		navigate('/setting')
	}

	return (
		<div className={styles.container}>
			{loading ? (
				<Loading width="10rem" height="10rem" />
			) : (
				<>
					<div className={styles.left}>
						<span className={styles.avatar}>
							<img src={info.avatar} alt="" />
						
						</span>
					</div>
					<div className={styles.right}>
						<span className={styles.username}>
							{info.username}
							{own && (
								<span onClick={handleSettingClick}>
									<Setting />
								</span>
							)}
						</span>
						<div className={styles.subText}>
							<span>
								<strong>
									{info.followings?.length}
								</strong>
								{' followings'}
							</span>
							<span>
								<strong>
									{info.followers?.length}
								</strong>
								{' followers'}
							</span>
						</div>
						<span className={styles.description}>
							{info.description}
						</span>
					</div>
				</>
			)}
		</div>
	)
}
