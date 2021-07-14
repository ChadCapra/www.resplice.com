import type { Message } from '$types'

export interface MessagesClient {
  send: (message: string) => Promise<Message>
  reply: (messageUUID: string, message: string) => Promise<Message>
  sendImage: (bytes: Blob) => Promise<Message>
  sendImageLink: (link: string) => Promise<Message>
  sendSurvey: (type: string, options: string[]) => Promise<Message>
}
