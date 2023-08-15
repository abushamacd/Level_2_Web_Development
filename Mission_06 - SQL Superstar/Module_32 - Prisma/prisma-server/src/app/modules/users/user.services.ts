/* eslint-disable no-unused-vars */
// export const getAllUsersService = async (): Promise<IUser[] | null> => {
//   const result = await User.find()
//   if (!result) {
//     throw new Error('Users retrieved failed')
//   }
//   return result
// }

import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

export const createUserService = async (data: User): Promise<User | null> => {
  console.log(data)
  const result = await prisma.user.create({
    data,
  })

  return result
}
