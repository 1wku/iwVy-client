import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Layout from './views/layouts'
import routes from './routes'
import { getMe } from 'data/slices/userSlice'

export default function App() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const isHasLayout = ['/']

	const RouteContainer = routes => {
		let result = []
		if (routes.length > 0) {
			result = routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={
						isHasLayout.includes(route.path) ? (
							<Layout type="large">{route.main}</Layout>
						) : (
							<Layout type="medium">
								{route.main}
							</Layout>
						)
					}
				></Route>
			))
		}
		return result
	}
	useEffect(() => {
		const userId = localStorage.getItem('userId')
		if (!userId) {
			navigate('/login')
		} else {
			dispatch(getMe({ userId }))
			navigate('/')
		}
	}, [dispatch, navigate])
	return (
		<div>
			<AnimatePresence>
				<Routes>{RouteContainer(routes)}</Routes>
			</AnimatePresence>
		</div>
	)
}
