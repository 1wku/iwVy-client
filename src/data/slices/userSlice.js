import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { userAPI } from 'apis/userAPI'

const initialState = {
	myInfo: {},
	followers: [],
	followings: [],
}

export const getMe = createAsyncThunk(
	'user/getme',
	async (data, thunkAPI) => {
		try {
			const res = await userAPI.getMe(data)
			const myInfo = res?.data?.data
			const followers = await userAPI.getByIds(myInfo.followers)
			const followings = await userAPI.getByIds(
				myInfo.followings,
			)
			return {
				myInfo,
				followers: followers.map(follow => follow?.data.data),
				followings: followings.map(follow => follow?.data.data),
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	},
)

const handleGetMe = (state, action) => {
	state.myInfo = action.payload.myInfo
	state.followers = action.payload.followers
	state.followings = action.payload.followings
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[getMe.fulfilled]: handleGetMe,
	},
})

export default userSlice.reducer
