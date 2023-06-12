import { ApiError } from '../../../errorFormating/apiError'
import { IGenericRes } from '../../../interface/genericRes'
import { IPeginationOptions } from '../../../interface/pagination'
import { acaSemTitleCodeMapper } from './acaSem.contant'
import { IAcaSem } from './acaSem.interface'
import { AcaSem } from './acaSem.model'
import status from 'http-status'

export const createAcaSemService = async (
  payload: IAcaSem
): Promise<IAcaSem | null> => {
  if (acaSemTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalied Semester Code')
  }
  const result = await AcaSem.create(payload)
  if (!result) {
    throw new Error('Academic Semester create failed')
  }
  return result
}

export const getAllSemestersService = async (
  payload: IPeginationOptions
): Promise<IGenericRes<IAcaSem[] | null>> => {
  const { page = 0, limit = 0 } = payload
  const skip = (page - 1) * limit
  const result = await AcaSem.find().sort().skip(skip).limit(limit)
  // const result = await AcaSem.find()
  const total = await AcaSem.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
