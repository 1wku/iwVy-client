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

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: {
		[getTimeLine.fulfilled]: handleGetTimeLine,
	},
})
export default postSlice.reducer
