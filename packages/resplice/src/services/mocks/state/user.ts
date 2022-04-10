import type { Profile } from '$types/user'

export const user: Profile = {
  uuid: 'bastilla-shan',
  name: 'Bastilla Shan',
  avatar:
    'https://res.cloudinary.com/capabit-solutions/image/upload/v1529002384/Resplice/lydkw9phbpozik3t8bus.png',
  handle: 'bastilla-shan',
  userRegisteredAt: 1638893210
}

export const userNoAvatar: Profile = {
  uuid: 'han-solo',
  name: 'Han Solo',
  avatar: null,
  handle: 'han-solo',
  userRegisteredAt: 1638893210
}
