import requestAPI from './axiosClient'

export const chatAPI = {
	getConversations(id) {
		return requestAPI(`/conversations/${id}`, 'GET')
	},
	getMessages(id) {
		return requestAPI(`/messages/${id}`, 'GET')
	},
	sendMessage(body) {
		return requestAPI('/messages', 'POST', body)
	},
}
