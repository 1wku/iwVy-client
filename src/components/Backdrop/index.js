import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { zoomImage } from 'data/slices/postSlice'

export default function Backdrop() {
	const dispatch = useDispatch()

	const { imageZooming, isZoom } = useSelector(state => state.post)

	return (
		<>
			{isZoom && (
				<div
					className={styles.backdrop}
					onClick={() =>
						dispatch(
							zoomImage({ url: '', isZoom: false }),
						)
					}
				>
						<img src={imageZooming} className={styles.backdropImg} alt="" />
				</div>
			)}
		</>
	)
}
