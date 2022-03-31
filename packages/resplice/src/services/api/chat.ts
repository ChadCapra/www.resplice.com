import * as reproto from '$lib/reproto'
import { ConnCommand } from '$services/api/appClient'

import type { ChatStore } from '$stores/chat'
// import type { Chat } from '$types/user'

const ServerMessageType = reproto.api_response.ResponseType
// TODO: Type data based on ResponseType
export type ServerMessage = {
  type: reproto.api_response.ResponseType
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

function chatClientFactory(
  conn: Worker,
  _cache: Worker,
  _store: ChatStore
): ChatClient {
  return {
    handleMessage: (message) => console.log(message),
    sendText: (chat) =>
      conn.postMessage({ type: ConnCommand.SEND, data: chat }),
    sendImage: (blob) =>
      conn.postMessage({ type: ConnCommand.SEND, data: blob }),
    sendImageLink: (link) =>
      conn.postMessage({ type: ConnCommand.SEND, data: link }),
    sendSurvey: (type, options) =>
      conn.postMessage({ type: ConnCommand.SEND, data: { type, options } }),
    reply: (chatUUID, chat) =>
      conn.postMessage({ type: ConnCommand.SEND, data: { chatUUID, chat } })
  }
}

export default chatClientFactory
