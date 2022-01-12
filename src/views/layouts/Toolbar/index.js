import { Divider, Group, DropItem, GroupItem } from 'components/UI'
import styles from './index.module.scss'
import { ReactComponent as Saveicon } from 'assets/icons/save.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { useNavigate } from 'react-router-dom'
import MiniChat from 'containers/Chat'

export default function Toolbar() {
	const navigate = useNavigate()

	const tools = [
		{ icon: <Plus />, text: 'New post', handleClick: () => {} },
		{
			icon: <Saveicon />,
			text: 'Saved posts',
			handleClick: () => {
				navigate('/savedposts')
			},
		},
	]
	return (
		<div className={styles.container}>
			<Group label="Tools bar" right scrollable>
				{tools.map(tool => (
					<GroupItem svg key={tool.text} {...tool} />
				))}
			</Group>
			<Divider />
			<MiniChat />
		</div>
	)
}
