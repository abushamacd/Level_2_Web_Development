import { Request, Response } from 'express'
import { sendRes } from '../../../utilities/sendRes'
import { tryCatch } from '../../../utilities/tryCatch'
import httpStatus from 'http-status'
import {
  createCategoryService,
  getCategoryService,
  getCategorysService,
  updateCategoryService,
} from './category.services'
import { Category } from '@prisma/client'

export const createCategory = tryCatch(async (req: Request, res: Response) => {
  const result = await createCategoryService(req.body)
  sendRes<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category create successfully',
    data: result,
  })
})

export const getCategorys = tryCatch(async (req: Request, res: Response) => {
  const result = await getCategorysService()
  sendRes<Category[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrive successfully',
    data: result,
  })
})

export const getCategory = tryCatch(async (req: Request, res: Response) => {
  const result = await getCategoryService(parseInt(req.params.id))
  sendRes<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrive successfully',
    data: result,
  })
})

export const updateCategory = tryCatch(async (req: Request, res: Response) => {
  const result = await updateCategoryService(parseInt(req.params.id), req.body)
  sendRes<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category update successfully',
    data: result,
  })
})
