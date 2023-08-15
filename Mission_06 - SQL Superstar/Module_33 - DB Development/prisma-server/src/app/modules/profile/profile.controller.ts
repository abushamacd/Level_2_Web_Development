import { Request, Response } from 'express'
import { sendRes } from '../../../utilities/sendRes'
import { tryCatch } from '../../../utilities/tryCatch'
import httpStatus from 'http-status'
import {
  createProfileService,
  getProfileService,
  getProfilesService,
  updateProfileService,
} from './profile.services'
import { Profile } from '@prisma/client'

export const createProfile = tryCatch(async (req: Request, res: Response) => {
  const result = await createProfileService(req.body)
  sendRes<Profile>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile create successfully',
    data: result,
  })
})

export const getProfiles = tryCatch(async (req: Request, res: Response) => {
  const result = await getProfilesService()
  sendRes<Profile[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrive successfully',
    data: result,
  })
})

export const getProfile = tryCatch(async (req: Request, res: Response) => {
  const result = await getProfileService(parseInt(req.params.id))
  sendRes<Profile>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrive successfully',
    data: result,
  })
})

export const updateProfile = tryCatch(async (req: Request, res: Response) => {
  const result = await updateProfileService(parseInt(req.params.id), req.body)
  sendRes<Profile>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile update successfully',
    data: result,
  })
})
