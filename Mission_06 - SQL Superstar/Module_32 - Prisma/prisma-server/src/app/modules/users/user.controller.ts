import { Request, Response } from 'express'
import { sendRes } from '../../../utilities/sendRes'
import { tryCatch } from '../../../utilities/tryCatch'
import httpStatus from 'http-status'
import { createUserService, getUsersService } from './user.services'
import { User } from '@prisma/client'

export const createUser = tryCatch(async (req: Request, res: Response) => {
  const result = await createUserService(req.body)
  sendRes<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User create successfully',
    data: result,
  })
})

export const getUsers = tryCatch(async (req: Request, res: Response) => {
  const result = await getUsersService()
  sendRes<User[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrive successfully',
    data: result,
  })
})
