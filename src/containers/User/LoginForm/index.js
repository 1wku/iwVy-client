import InputBasic from 'components/UI/InputBasic'
import ButtonBasic from 'components/UI/ButtonBasic'
import styles from './index.module.scss'

export default function LoginForm() {
	return (
		<div className={styles.container}>
			<InputBasic
				title="Email"
				placeholder="Enter your email..."
			/>
			<InputBasic
				title="Password"
				placeholder="Enter your password..."
			/>
			<div className={styles.py}>
				<ButtonBasic
					text="Sign up"
					fullWidth
					theme="thin"
					color="green"
				/>
			</div>
			<div className={styles.dividerContainer}>
				<span className={styles.divider}></span>
				<span>Or</span>
				<span className={styles.divider}></span>
			</div>
			<div className={styles.signupWith}>
				<ButtonBasic
					text="Google"
					fullWidth
					theme="thin"
					color="green"
				/>
				<ButtonBasic
					text="Sign up"
					fullWidth
					theme="thin"
					color="green"
				/>
			</div>
		</div>
	)
}
