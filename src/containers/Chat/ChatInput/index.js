import { ReactComponent as SendIcon } from 'assets/icons/send.svg'
import styles from './index.module.scss'

export default function ChatInput({ value, setValue, handleSubmit }) {
	return (
		<div className={styles.container}>
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				onKeyPress={e =>
					e.key === 'Enter' ? handleSubmit() : {}
				}
			/>
			<SendIcon onClick={handleSubmit} />
		</div>
	)
}
