import { useSelector } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import githubLogo from 'assets/images/githubLogo.png'
import { ReactComponent as PersonIcon } from 'assets/icons/person.svg'
import styles from './index.module.scss'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'

export default function Layout({ children, type, side }) {
	const userInfo = useSelector(state => state.user.myInfo)

	const navigators = [
		{
			path: '/',
			text: 'Home',
		},
		{
			path: '/chat',
			text: 'Chat',
		},
		{
			//! thêm path sau khi có id
			path: `/user/${userInfo._id}`,
			text: userInfo.username || '',
			icon:
				userInfo.avatar !== '' ? (
					<img src={userInfo.avatar} alt="" />
				) : (
					<PersonIcon />
				),
		},
	]

	const infomations = [
		{
			path: 'https://github.com/1wku',
			text: 'My GitHub',
			icon: <img src={githubLogo} alt="" />,
		},
		{
			path: 'https://github.com/1wku',
			text: 'About',
		},
	]

	return (
		<>
			<Header
				type={type}
				navigators={
					type === 'large' ? navigators : infomations
				}
			/>
			{type === 'large' ? (
				<div className={styles.container}>
					{side && <Sidebar />}
					{children}
					{side && <Toolbar />}
				</div>
			) : (
				children
			)}
			{/* {type === 'large' && <Footer />} */}
		</>
	)
}
