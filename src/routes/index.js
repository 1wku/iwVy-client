import { lazy, Suspense } from 'react'


const ChangePass = lazy(() => import('../views/pages/ChangePass'))
const Chat = lazy(() => import('../views/pages/Chat'))
const Meetting = lazy(() => import('../views/pages/Meetting'))
const Setting = lazy(() => import('../views/pages/Setting'))
const HomePage = lazy(() => import('../views/pages/Home'))
const LoginPage = lazy(() => import('../views/pages/Login'))
const RegisterPage = lazy(() => import('../views/pages/Register'))
const PersonalPage = lazy(() => import('views/pages/personalPage'))
const SavedPosts = lazy(() => import('views/pages/SavedPosts'))

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
	{
		path: '/user/:id',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<PersonalPage />
			</Suspense>
		),
	},
	{
		path: '/savedposts',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<SavedPosts />
			</Suspense>
		),
	},
	{
		path: '/setting',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<Setting />
			</Suspense>
		),
	},
	{
		path: '/changepass',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<ChangePass />
			</Suspense>
		),
	},
	{
		path: '/chat',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<Chat />
			</Suspense>
		),
	},
	{
		path: '/meetting/:id',
		main: (
			<Suspense fallback={<h1>Loadding...</h1>}>
				<Meetting />
			</Suspense>
		),
	},
]

export default routes
