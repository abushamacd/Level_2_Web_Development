import { NextFunction, Request, Response } from 'express'
import { createUserService } from './user.services'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import status from 'http-status'

export const createUser = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await createUserService(req.body)
    sendRes(res, {
      statusCode: status.OK,
      success: true,
      message: 'Create users successfully',
      result: result,
    })
    next()
  }
)
