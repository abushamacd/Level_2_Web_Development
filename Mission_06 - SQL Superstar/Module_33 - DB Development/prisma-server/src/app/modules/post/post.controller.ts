import { Request, Response } from 'express'
import { sendRes } from '../../../utilities/sendRes'
import { tryCatch } from '../../../utilities/tryCatch'
import httpStatus from 'http-status'
import {
  createPostService,
  getPostService,
  getPostsService,
  updatePostService,
} from './post.services'
import { Post } from '@prisma/client'
import { pick } from '../../../utilities/pick'
import { paginationFields } from '../../../constants/pagination'
import { postFilterableFields } from './post.constant'

export const createPost = tryCatch(async (req: Request, res: Response) => {
  const result = await createPostService(req.body)
  sendRes<Post>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post create successfully',
    data: result,
  })
})

export const getPosts = tryCatch(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields)
  const filters = pick(req.query, postFilterableFields)

  const result = await getPostsService(paginationOptions, filters)
  sendRes<Post[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post retrive successfully',
    data: result,
  })
})

export const getPost = tryCatch(async (req: Request, res: Response) => {
  const result = await getPostService(parseInt(req.params.id))
  sendRes<Post>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post retrive successfully',
    data: result,
  })
})

export const updatePost = tryCatch(async (req: Request, res: Response) => {
  const result = await updatePostService(parseInt(req.params.id), req.body)
  sendRes<Post>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post update successfully',
    data: result,
  })
})
