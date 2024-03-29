import * as reproto from '@resplice/proto'
import { ConnCommand } from '$services/api/appClient'

import type { ChatStore } from '$modules/chat/chat.store'
// import type { Chat } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
// TODO: Type data based on ResponseType
export type ServerMessage = {
	type: reproto.server_message.ServerMessageType
	data: any
}

export interface ChatClient {
	handleMessage: (message: ServerMessage) => void
	sendText: (chat: string) => void
	sendImage: (blob: Blob) => void
	sendImageLink: (link: string) => void
	sendSurvey: (type: string, options: string[]) => void
	reply: (chatUUID: string, chat: string) => void
}

function chatClientFactory(conn: Worker, _cache: Worker, _store: ChatStore): ChatClient {
	return {
		handleMessage: (message) => console.log(message),
		sendText: (chat) => conn.postMessage({ type: ConnCommand.SEND, data: chat }),
		sendImage: (blob) => conn.postMessage({ type: ConnCommand.SEND, data: blob }),
		sendImageLink: (link) => conn.postMessage({ type: ConnCommand.SEND, data: link }),
		sendSurvey: (type, options) =>
			conn.postMessage({ type: ConnCommand.SEND, data: { type, options } }),
		reply: (chatUUID, chat) =>
			conn.postMessage({ type: ConnCommand.SEND, data: { chatUUID, chat } })
	}
}

export default chatClientFactory
