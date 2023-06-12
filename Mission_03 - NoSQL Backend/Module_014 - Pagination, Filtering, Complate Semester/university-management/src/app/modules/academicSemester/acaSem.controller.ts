import { NextFunction, Request, Response } from 'express'
import { createAcaSemService, getAllSemestersService } from './acaSem.services'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import status from 'http-status'
import { pick } from '../../../utilities/pick'
import { paginationFields } from '../../../constant/pagination'

export const createAcaSem = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await createAcaSemService(req.body)
    sendRes(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic Semester successfully',
      result: result,
    })
    next()
  }
)

export const getAllSemesters = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationFields)
    const result = await getAllSemestersService(paginationOptions)
    sendRes(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic semester get successfully',
      result: result,
    })
    next()
  }
)
