import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { postAPI } from 'apis/postAPI'

const initialState = {
	userPosts: [],
	followPosts: [],
	timeline: [],
}

export const getTimeLine = createAsyncThunk(
	'post/timeline',
	async (data, thunkAPI) => {
		try {
			const res = await postAPI.getTimeLine(data)
			return res?.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err)
		}
	},
)

const handleGetTimeLine = (state, action) => {
	state.userPosts = action.payload.userPosts
	state.followPosts = action.payload.followPosts.flat(1)
}

export const likePost = createAsyncThunk(
	'post/like&dislike',
	async (data, thunkAPI) => {
		const res = await postAPI.likePost(data)
		return res?.data
	},
)

const handleLikePost = (state, action) => {
	console.log(action.payload)
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: {
		[getTimeLine.fulfilled]: handleGetTimeLine,
		[likePost.fulfilled]: handleLikePost,
	},
})
export default postSlice.reducer
