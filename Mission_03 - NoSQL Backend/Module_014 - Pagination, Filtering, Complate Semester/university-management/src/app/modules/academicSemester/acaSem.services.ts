import { ApiError } from '../../../errorFormating/apiError'
import { pageCalculate } from '../../../helpers/paginationHelper'
import { IPeginationOptions } from '../../../interface/pagination'
import { acaSemSearchFields, acaSemTitleCodeMapper } from './acaSem.contant'
import { IAcaSem, IAcaSemFilters } from './acaSem.interface'
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
  filters: IAcaSemFilters,
  payload: IPeginationOptions
) => {
  const { searchTerm, ...filtersData } = filters
  const { page, limit, skip, sortOrder, sortBy } = pageCalculate(payload)

  const searchConditions = []

  if (searchTerm) {
    searchConditions.push({
      $or: acaSemSearchFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    searchConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortOrder && sortBy) {
    sortConditions[sortBy] = sortOrder
  }

  // eslint-disable-next-line no-console
  // console.log(sortConditions)

  const result = await AcaSem.find({ $and: searchConditions })
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
