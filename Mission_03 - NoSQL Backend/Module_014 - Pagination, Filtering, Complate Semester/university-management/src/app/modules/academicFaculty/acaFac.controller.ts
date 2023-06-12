import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { acaFacFilterableFields } from './acaFac.constants'
import { IAcaFac } from './acaFac.interfaces'
import { AcaFacService } from './acaFac.services'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import { pick } from '../../../utilities/pick'
import { paginationFields } from '../../../constant/pagination'

export const createFaculty = tryCatch(async (req: Request, res: Response) => {
  const { ...acaFacData } = req.body
  const result = await AcaFacService.createFaculty(acaFacData)
  sendRes<IAcaFac>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty created successfully',
    result: result,
  })
})

export const getAllFaculties = tryCatch(async (req: Request, res: Response) => {
  const filters = pick(req.query, acaFacFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await AcaFacService.getAllFaculties(filters, paginationOptions)

  sendRes<IAcaFac[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculties retrieved successfully',
    meta: result.meta,
    result: result.data,
  })
})

export const getSingleFaculty = tryCatch(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AcaFacService.getSingleFaculty(id)

    sendRes<IAcaFac>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty fetched successfully',
      result: result,
    })
  }
)

export const updateFaculty = tryCatch(
  tryCatch(async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedData = req.body
    const result = await AcaFacService.updateFaculty(id, updatedData)

    sendRes<IAcaFac>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty updated successfully',
      result: result,
    })
  })
)

export const deleteFaculty = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AcaFacService.deleteByIdFromDB(id)

  sendRes<IAcaFac>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty deleted successfully',
    result: result,
  })
})
