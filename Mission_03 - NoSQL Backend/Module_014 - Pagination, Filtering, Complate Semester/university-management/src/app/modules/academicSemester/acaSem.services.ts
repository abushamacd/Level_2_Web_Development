import { ApiError } from '../../../errorFormating/apiError'
import { pageCalculate } from '../../../helpers/paginationHelper'
import { IGenericRes } from '../../../interface/genericRes'
import { IPeginationOptions } from '../../../interface/pagination'
import { acaSemTitleCodeMapper } from './acaSem.contant'
import { IAcaSem } from './acaSem.interface'
import { AcaSem } from './acaSem.model'
import status from 'http-status'
import { SortOrder } from 'mongoose'

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
  const { page, limit, skip, sortOrder, sortBy } = pageCalculate(payload)

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortOrder && sortBy) {
    sortConditions[sortBy] = sortOrder
  }

  // eslint-disable-next-line no-console
  // console.log(sortConditions)

  const result = await AcaSem.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
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
