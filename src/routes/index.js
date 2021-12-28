import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('../views/pages/Home'))
const LoginPage = lazy(() => import('../views/pages/Login'))
const RegisterPage = lazy(() => import('../views/pages/Register'))

const routes = [
	{
		path: '/',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<HomePage />
			</Suspense>
		),
	},
	{
		path: '/login',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<LoginPage />
			</Suspense>
		),
	},
	{
		path: '/register',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<RegisterPage />
			</Suspense>
		),
	},
]

export default routes
