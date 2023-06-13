import { Request, Response } from 'express'
import {
  createAcaSemService,
  deleteSemesterServices,
  getAllSemestersService,
  getSingleSemesterService,
  updateSemesterServices,
} from './acaSem.services'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import status from 'http-status'
import { pick } from '../../../utilities/pick'
import { paginationFields } from '../../../constant/pagination'
import { IAcaSem } from './acaSem.interface'
import { acaSemFilterFields } from './acaSem.contant'

export const createAcaSem = tryCatch(async (req: Request, res: Response) => {
  const result = await createAcaSemService(req.body)
  sendRes<IAcaSem>(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semester successfully',
    result: result,
  })
})

export const getAllSemesters = tryCatch(async (req: Request, res: Response) => {
  const filters = pick(req.query, acaSemFilterFields)
  const paginationOptions = pick(req.query, paginationFields)
  const result = await getAllSemestersService(filters, paginationOptions)
  sendRes<IAcaSem[]>(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic semester get successfully',
    meta: result.meta,
    result: result.data,
  })
})

export const getSingleSemester = tryCatch(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await getSingleSemesterService(id)
    sendRes<IAcaSem>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Semester get successfully',
      result: result,
    })
  }
)

export const updateAcaSem = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const reqData = req.body
  const result = await updateSemesterServices(id, reqData)
  sendRes<IAcaSem>(res, {
    statusCode: status.OK,
    success: true,
    message: 'Semester update successfully',
    result: result,
  })
})
export const deleteAcaSem = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await deleteSemesterServices(id)
  sendRes<IAcaSem>(res, {
    statusCode: status.OK,
    success: true,
    message: 'Semester delete successfully',
    result: result,
  })
})
