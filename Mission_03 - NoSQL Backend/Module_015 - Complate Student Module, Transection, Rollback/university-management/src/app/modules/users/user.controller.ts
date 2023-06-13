import { Request, Response } from 'express'
import { createStudentService } from './user.services'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import status from 'http-status'

export const createStudent = tryCatch(async (req: Request, res: Response) => {
  const { student, ...userData } = req.body
  const result = await createStudentService(student, userData)
  sendRes(res, {
    statusCode: status.OK,
    success: true,
    message: 'Create users successfully',
    result: result,
  })
})
