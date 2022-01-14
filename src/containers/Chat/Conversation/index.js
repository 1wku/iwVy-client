import WrapAvatar from 'components/UI/AvatarWrap'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.scss'
import { IconWrapper } from 'components/UI'
import { ReactComponent as Phone } from 'assets/icons/phone.svg'
import { setConversation, setLoading } from 'data/slices/chatSlice'

export default function Conversation({
	conversation,
	mini,
	setLabelImg,
}) {
	const navigative = useNavigate()
	const dispatch = useDispatch()
	const { followings, myInfo } = useSelector(state => state.user)
	const { currentConversation } = useSelector(state => state.chat)
	const [user, setUser] = useState()

	const handleClick = () => {
		dispatch(setLoading(true))
		dispatch(setConversation(conversation))
		setLabelImg(user?.avatar)
	}

	useEffect(() => {
		if (conversation.members?.length <= 2) {
			const friendId = conversation.members.find(
				user => user !== myInfo._id,
			)
			const friend = followings.find(
				user => user._id === friendId,
			)
			setUser(friend)
			if (currentConversation._id === conversation._id)
				setLabelImg(friend?.avatar)
		}
	}, [followings, conversation, myInfo])

	const handleCall = () => {
		navigative(`meetting/${user.id}`)
	}

	return (
		<>
			{mini ? (
				<div
					onClick={handleClick}
					className={styles.container_mini}
				>
					<WrapAvatar
						url={user?.avatar}
						handleClick={user?.handleClick}
					/>
					<span
						className={styles.phone_mini}
						onClick={handleCall}
					>
						<IconWrapper icon={<Phone />} />
					</span>
				</div>
			) : (
				<div></div>
			)}
		</>
	)
}
