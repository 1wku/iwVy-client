import requestAPI from './axiosClient'

export const postAPI = {
	getTimeLine({ userId, params }) {
		return requestAPI(
			`/posts/timeline/${userId}`,
			'GET',
			{},
			params,
		)
	},
}
