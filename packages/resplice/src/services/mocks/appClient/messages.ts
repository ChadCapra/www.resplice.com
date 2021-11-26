import type { Message } from '$types/message'

const messages: Message[] = [
  {
    uuid: '123',
    entity_uuid: 'darth-vader',
    entity_name: 'Darth Vader',
    timestamp: '2021-03-11T02:00:16.813Z',
    content: 'Come to the dark side...'
  },
  {
    uuid: '124',
    entity_uuid: 'bastilla-shan',
    entity_name: 'Bastilla Shan',
    timestamp: '2021-03-11T02:02:19.732Z',
    content: 'I would never!'
  },
  {
    uuid: '234nkljn2k34',
    entity_uuid: 'han-solo',
    entity_name: 'Han Solo',
    timestamp: '2021-06-23T23:00:00.000Z',
    content:
      'This trip is going to be awesome! I already planned for 2 of the cities we will be in.'
  }
]

export default messages
