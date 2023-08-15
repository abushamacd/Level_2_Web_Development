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
  const result = await prisma.user.create({
    data,
  })

  if (!result) {
    throw new Error(`User create failed`)
  }

  return result
}

export const getUsersService = async (): Promise<User[] | null> => {
  const result = await prisma.user.findMany()
  if (!result) {
    throw new Error(`User retrive failed`)
  }

  return result
}
