import { ChatDirection, ChatType, ContentType } from '$modules/chat/chat.types'
import type { Chat } from '$modules/chat/chat.types'

const chats: Chat[] = [
	{
		type: ChatType.IMMEDIDATE,
		uuid: '123',
		entity_uuid: 'darth-vader',
		direction: ChatDirection.RECEIVED,
		content_type: ContentType.TEXT,
		content: { text: 'Come to the dark side...' },
		sent_at: new Date('2021-03-11T02:00:16.813Z')
	},
	{
		type: ChatType.IMMEDIDATE,
		uuid: '124',
		entity_uuid: 'bastilla-shan',
		direction: ChatDirection.SENT,
		content_type: ContentType.TEXT,
		content: { text: 'I would never!' },
		sent_at: new Date('2021-03-11T02:03:16.813Z')
	},
	{
		type: ChatType.IMMEDIDATE,
		uuid: '234nkljn2k34',
		entity_uuid: 'han-solo',
		direction: ChatDirection.RECEIVED,
		content_type: ContentType.TEXT,
		content: {
			text: 'This trip is going to be awesome! I already planned for 2 of the cities we will be in.'
		},
		sent_at: new Date('2021-06-23T23:00:00.000Z')
	}
]

export default chats
