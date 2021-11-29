import type { ChatStore } from '$stores/chat'
// import type { Chat } from '$types/user'

export interface ChatClient {
  handleMessage: (message: any) => void
  sendText: (chat: string) => void
  sendImage: (blob: Blob) => void
  sendImageLink: (link: string) => void
  sendSurvey: (type: string, options: string[]) => void
  reply: (chatUUID: string, chat: string) => void
}

function chatClientFactory(
  conn: Worker,
  _cache: Worker,
  store: ChatStore
): ChatClient {
  return {
    handleMessage: (message) => console.log(message),
    sendText: (chat) => conn.postMessage({ type: 'SEND', data: chat }),
    sendImage: (blob) => conn.postMessage({ type: 'SEND', data: blob }),
    sendImageLink: (link) => conn.postMessage({ type: 'SEND', data: link }),
    sendSurvey: (type, options) =>
      conn.postMessage({ type: 'SEND', data: { type, options } }),
    reply: (chatUUID, chat) =>
      conn.postMessage({ type: 'SEND', data: { chatUUID, chat } })
  }
}

export default chatClientFactory
