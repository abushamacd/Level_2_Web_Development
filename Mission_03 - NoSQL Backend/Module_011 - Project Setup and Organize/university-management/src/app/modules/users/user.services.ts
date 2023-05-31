import { IUser } from './user.interface'
import { User } from './user.model'

export const createUser = async (data: IUser): Promise<IUser | null> => {
  const result = User.create(data)
  if (!result) {
    throw new Error('User create failed')
  }
  return result
}
