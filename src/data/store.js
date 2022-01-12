import { configureStore } from '@reduxjs/toolkit'

import { authReducer, postReducer, userReducer, chatReducer } from './slices'

const store = configureStore({
	reducer: {
		auth: authReducer,
		post: postReducer,
		user: userReducer,
		chat: chatReducer
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({ serializableCheck: false }),
	],
})

export default store
