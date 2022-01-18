import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'

import styles from './index.module.scss'
import socket, { SocketContext } from 'service/SocketContext'
import Controller from './Controller'

const Meeting = () => {
	const {
		myVideo,
		callAccepted,
		userVideo,
		callEnded,
		stream,
		setStream,
		leaveCall,
		callUser,
		setCallEnded,
		connectionRef,
	} = useContext(SocketContext)
	const navigative = useNavigate()

	const params = useParams()
	const [position, setPosition] = useState(1)

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then(currentStream => {
				setStream(currentStream)
				myVideo.current.srcObject = currentStream
				callUser(params.id, currentStream)
			})
	}, [])

	return (
		<div
			className={clsx(
				styles.container,
				styles[`container_${position}`],
			)}
		>
			{callAccepted && !callEnded && (
				<video
					ref={userVideo}
					playsInline
					autoPlay
					className={clsx(
						styles.userVideo,
						styles[`userVideo_${position}`],
					)}
				/>
			)}
			{stream && (
				<video
					ref={myVideo}
					playsInline
					muted
					autoPlay
					className={clsx(
						styles.myVideo,
						styles[`myVideo_${position}`],
					)}
				/>
			)}
			<Controller
				id={params.id}
				setPosition={setPosition}
				stream={stream}
				leaveCall={leaveCall}
			/>
		</div>
	)
}

export default Meeting
