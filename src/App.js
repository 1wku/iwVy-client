import { Route, Routes } from 'react-router-dom'
import Layout from './views/layouts'
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

	return (
		<div>
			<Routes>{RouteContainer(routes)}</Routes>
		</div>
	)
}
