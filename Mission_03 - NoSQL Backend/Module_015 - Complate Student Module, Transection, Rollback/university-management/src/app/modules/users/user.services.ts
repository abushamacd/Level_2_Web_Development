import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateStudentId } from './user.utils'

export const createUserService = async (data: IUser): Promise<IUser | null> => {
  // generated ID
  const id = await generateStudentId()
  data.id = id
  // default password
  if (!data.password) {
    data.password = config.user_default_pass as string
  }
  const result = await User.create(data)
  if (!result) {
    throw new Error('User create failed')
  }
  return result
}
