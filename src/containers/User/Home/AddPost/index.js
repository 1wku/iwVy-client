import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import { DropItem, IconWrapper, ImageText } from 'components/UI'
import Appbar from './Appbar'
import styles from './index.module.scss'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { ReactComponent as Image } from 'assets/icons/image.svg'
import { ReactComponent as Send } from 'assets/icons/send.svg'

export default function AddPost() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')
	const [image, setImage] = useState()

	const { username, avatar } = useSelector(
		state => state.user.myInfo,
	)

	const inputRef = useRef()

	const handleInputChange = e => {
		setValue(e.target.value)
	}

	const handlePreviewImage = e => {
		const file = e.target.files[0]
		file.preview = URL.createObjectURL(file)
		setOpen(true)
		setImage(file)
	}

	const handleAddPost = () => {}

	useEffect(() => {
		inputRef.current && inputRef.current.focus()
		return () => {
			image && URL.revokeObjectURL(image.preview)
		}
	}, [image])

	return (
		<div className={styles.container}>
			<Appbar
				avatar="https://i.pinimg.com/originals/1a/e7/53/1ae75336c051202a09eb2c841c588a20.gif"
				username="Tien  "
			>
				<ImageText
					type="avatar"
					image={avatar || ''}
					text={username || ''}
				/>
				<div className={styles.groupIcon}>
					<IconWrapper
						icon={<Plus />}
						handleClick={() => setOpen(!open)}
						dark
					/>
				</div>
			</Appbar>
			{open && (
				<textarea
					className={styles.textarea}
					value={value}
					onChange={handleInputChange}
					rows={2}
					ref={inputRef}
				/>
			)}
			{image && (
				<img
					src={image.preview}
					className={styles.preview}
					alt=""
				/>
			)}
			{open && (
				<div className={styles.buttonGroup}>
					<span className={styles.icon}>
						<label htmlFor="imageInput">
							<DropItem
								icon={<Image />}
								text="Image"
								handleClick={handleAddPost}
								pointer
							/>
						</label>
					</span>
					<span className={styles.icon}>
						<DropItem
							icon={<Send />}
							text="Pulish"
							handleClick={handleAddPost}
							pointer
						/>
					</span>
				</div>
			)}
			<input
				type="file"
				name="imageInput"
				id="imageInput"
				className={styles.dn}
				onChange={handlePreviewImage}
			/>
		</div>
	)
}
