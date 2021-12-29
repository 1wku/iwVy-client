import { Link } from 'react-router-dom'

import LoginForm from 'containers/User/LoginForm'
import LoginBanner from 'components/Image/LoginBanner'
import styles from './index.module.scss'

export default function Login() {
	return (
		<div className={styles.container}>
			<LoginForm />
            <LoginBanner /> 
		</div>
	)
}
