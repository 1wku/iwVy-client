import { Route, Routes } from 'react-router-dom'
import Layout from './containers/layouts'
import routes from './routes'

export default function App() {
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
							<Layout>{route.main}</Layout>
						) : (
							route.main
						)
					}
				></Route>
			))
		}
		return result
	}

	return (
		<div>
			<Routes>{RouteContainer(routes)}</Routes>
		</div>
	)
}
