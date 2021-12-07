import type { User } from '$types/user'

export const user: User = {
  uuid: 'bastilla-shan',
  name: 'Bastilla Shan',
  avatar:
    'https://res.cloudinary.com/capabit-solutions/image/upload/v1529002384/Resplice/lydkw9phbpozik3t8bus.png',
  handle: 'bastilla-shan',
  public_access_enabled: false,
  user_registered_at: new Date('2021-12-07T16:06:50.271Z')
}

export const userNoAvatar: User = {
  uuid: 'han-solo',
  name: 'Han Solo',
  avatar: null,
  handle: 'han-solo',
  public_access_enabled: true,
  user_registered_at: new Date('2021-12-07T16:06:50.271Z')
}
