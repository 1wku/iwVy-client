import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './index.module.scss'
import socket, { SocketContext } from 'service/SocketContext'

const Meeting = () => {
	const {
		myVideo,
		callAccepted,
		userVideo,
		callEnded,
		stream,
		call,
		me,
		setStream,
		leaveCall,
		callUser,
		answerCall,
	} = useContext(SocketContext)

	const params = useParams()

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then(currentStream => {
				setStream(currentStream)
				myVideo.current.srcObject = currentStream
			})
			.then(() => {

				callUser(params.id)
			})
	}, [])
	console.log(userVideo)

	return (
		<div className={styles.container}>
			{stream && (
				<video ref={myVideo} playsInline muted autoPlay />
			)}
			{callAccepted && !callEnded && (
				<video ref={userVideo} playsInline autoPlay />
			)}
			{callAccepted && !callEnded && (
				<button onClick={() => leaveCall()}>Hang up </button>
			)}
		</div>
	)
}

export default Meeting
