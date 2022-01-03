import { configureStore } from '@reduxjs/toolkit'

import { authReducer, postReducer, userReducer } from './slices'

const store = configureStore({
	reducer: {
		auth: authReducer,
		post: postReducer,
		user: userReducer,
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({ serializableCheck: false }),
	],
})

export default store
