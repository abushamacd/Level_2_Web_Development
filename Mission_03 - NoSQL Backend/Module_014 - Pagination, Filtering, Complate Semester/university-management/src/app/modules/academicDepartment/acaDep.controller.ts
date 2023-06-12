import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { IAcaDep } from './acaDep.interfaces'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import { pick } from '../../../utilities/pick'
import { paginationFields } from '../../../constant/pagination'
import { acaDepFilterableFields } from './acaDep.constants'
import {
  createDepartmentService,
  deleteDepartmentService,
  getAllDepartmentsService,
  getSingleDepartmentService,
  updateDepartmentService,
} from './acaDep.services'

export const createDepartment = tryCatch(
  async (req: Request, res: Response) => {
    const { ...academicDepartmentData } = req.body
    const result = await createDepartmentService(academicDepartmentData)

    sendRes<IAcaDep>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created successfully',
      result: result,
    })
  }
)

export const getAllDepartments = tryCatch(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, acaDepFilterableFields)
    const paginationOptions = pick(req.query, paginationFields)

    const result = await getAllDepartmentsService(filters, paginationOptions)

    sendRes<IAcaDep[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic departments fetched successfully',
      meta: result.meta,
      result: result.data,
    })
  }
)

export const getSingleDepartment = tryCatch(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await getSingleDepartmentService(id)

    sendRes<IAcaDep>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department fetched successfully',
      result: result,
    })
  }
)

export const updateDepartment = tryCatch(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await updateDepartmentService(id, req.body)

    sendRes<IAcaDep>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department updated successfully',
      result: result,
    })
  }
)

export const deleteDepartment = tryCatch(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await deleteDepartmentService(id)

    sendRes<IAcaDep>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department deleted successfully',
      result: result,
    })
  }
)
