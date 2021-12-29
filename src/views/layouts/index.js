import Header from './Header'
import Footer from './Footer'
import githubLogo from 'assets/images/githubLogo.png'
import { ReactComponent as PersonIcon } from 'assets/icons/person.svg'

export default function Layout({ children, type }) {
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
			path: '/:id',
			text: 'Tien',
			icon: <PersonIcon />,
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
			{children}
			{type === 'large' && <Footer />}
		</>
	)
}
