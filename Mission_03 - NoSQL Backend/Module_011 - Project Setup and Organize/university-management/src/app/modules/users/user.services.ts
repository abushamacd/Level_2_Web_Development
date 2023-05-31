import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

export const createUser = async (data: IUser): Promise<IUser | null> => {
  // generated ID
  const id = await generateUserId()
  data.id = id
  // default password
  if (!data.password) {
    data.password = config.user_default_pass as string
  }
  const result = User.create(data)
  if (!result) {
    throw new Error('User create failed')
  }
  return result
}
