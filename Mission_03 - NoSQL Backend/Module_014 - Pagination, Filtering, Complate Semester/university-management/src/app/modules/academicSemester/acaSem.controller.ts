import { NextFunction, Request, Response } from 'express'
import { createAcaSemService, getAllSemestersService } from './acaSem.services'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import status from 'http-status'
import { pick } from '../../../utilities/pick'
import { paginationFields } from '../../../constant/pagination'
import { IAcaSem } from './acaSem.interface'

export const createAcaSem = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await createAcaSemService(req.body)
    sendRes<IAcaSem>(res, {
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
    // eslint-disable-next-line no-console
    console.log(req.query)
    const filters = pick(req.query, ['searchTerm'])
    const paginationOptions = pick(req.query, paginationFields)
    const result = await getAllSemestersService(filters, paginationOptions)
    sendRes<IAcaSem[]>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic semester get successfully',
      meta: result.meta,
      result: result.data,
    })
    next()
  }
)
