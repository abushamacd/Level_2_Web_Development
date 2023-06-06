import { NextFunction, Request, Response } from 'express'
import { createAcaSemService } from './acaSem.services'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import status from 'http-status'

export const createAcaSem = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await createAcaSemService(req.body)
    next()
    sendRes(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic Semester successfully',
      result: result,
    })
  }
)
