import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './index.module.scss'
import { SocketContext } from 'service/SocketContext'

const MeettingAnswer = () => {
	const {
		myVideo,
		callAccepted,
		userVideo,
		callEnded,
		stream,
		call,
		setStream,
		leaveCall,
		callUser,
		answerCall,
	} = useContext(SocketContext)
	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then(currentStream => {
				setStream(currentStream)
				myVideo.current.srcObject = currentStream
			})
			.then(answerCall)
	}, [])
	console.log(userVideo)
	return (
		<div className={styles.container}>
			{stream && (
				<video playsInline muted ref={myVideo} autoPlay />
			)}
			{callAccepted && !callEnded && (
				<video playsInline ref={userVideo} autoPlay />
			)}
			{callAccepted && !callEnded && (
				<button onClick={() => leaveCall()}>Hang up </button>
			)}
		</div>
	)
}

export default MeettingAnswer
