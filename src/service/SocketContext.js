import {
	createContext,
	useState,
	useRef,
	useEffect,
	useCallback,
} from 'react'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext()

const socket = io('ws://localhost:3007')

const ContextProvider = ({ children }) => {
	const userId = localStorage.getItem('userId')

	const [callAccepted, setCallAccepted] = useState(false)
	const [callEnded, setCallEnded] = useState(false)
	const [stream, setStream] = useState(null)
	const [name, setName] = useState('')
	const [call, setCall] = useState({})
	const [me, setMe] = useState('')
	const [users, setUsers] = useState([])

	const myVideo = useRef()
	const userVideo = useRef()
	let connectionRef = useRef()

	useEffect(() => {
		socket.emit('addUser', userId)
		socket.on('getMe', id => {
			setMe(id)
		})
		socket.on('getUsers', users => {
			console.log(users)
			setUsers(users)
		})
		socket.on('callUser', data => {
			setCall({
				isReceivedCall: true,
				from: data.from,
				signal: data.signal,
			})
		})
	}, [])

	const callUser = useCallback(
		id => {
			const peer = new Peer({
				initiator: true,
				trickle: false,
				stream: stream,
			})
			peer.on('signal', data => {
				console.log(users)
				const socketId = users.find(
					user => user.userId === id,
				).socketId
				socket.emit('callUser', {
					to: socketId,
					signalData: data,
					from: me,
				})
			})
			peer.on('stream', stream => {
				userVideo.current.srcObject = stream
			})
			socket.on('callAccepted', data => {
				setCallAccepted(true)
				peer.signal(data)
			})
			connectionRef.current = peer
		},
		[me, stream, users],
	)

	const answerCall = useCallback(() => {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream,
		})
		peer.on('signal', data => {
			socket.emit('answerCall', {
				signal: data,
				to: call.from,
			})
		})
		peer.on('stream', stream => {
			userVideo.current.srcObject = stream
		})
		peer.signal(call.signal)
		connectionRef.current = peer
	}, [call.from, call.signal, stream])

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
		window.location.reload()
	}

	return (
		<SocketContext.Provider
			value={{
				call,
				callAccepted,
				myVideo,
				userVideo,
				stream,
				name,
				callEnded,
				me,
				setName,
				leaveCall,
				answerCall,
				callUser,
				setStream,
			}}
		>
			{children}
		</SocketContext.Provider>
	)
}

export { ContextProvider, SocketContext }

export default socket
