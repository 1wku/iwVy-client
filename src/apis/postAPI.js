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
	likePost({ userId, postId }) {
		console.log({userId, postId})
		return requestAPI(`/posts/${postId}/like`, 'PUT', { userId })
	},
	addPost(body) {
		return requestAPI('/auth/posts', 'POST', body)
	},
}
