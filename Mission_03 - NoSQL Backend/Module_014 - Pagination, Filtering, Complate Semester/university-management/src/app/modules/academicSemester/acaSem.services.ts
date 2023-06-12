import { ApiError } from '../../../errorFormating/apiError'
import { pageCalculate } from '../../../helpers/paginationHelper'
import { IGenericRes } from '../../../interface/genericRes'
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
): Promise<IGenericRes<IAcaSem[]>> => {
  // ) => {
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

  const filterConditions =
    searchConditions.length > 0 ? { $and: searchConditions } : {}

  const result = await AcaSem.find(filterConditions)
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

export const getSingleSemesterService = async (
  id: string
): Promise<IAcaSem | null> => {
  const result = await AcaSem.findById(id)
  return result
}

export const updateSemesterServices = async (
  id: string,
  payload: Partial<IAcaSem>
) => {
  if (
    payload.title &&
    payload.code &&
    acaSemTitleCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(status.BAD_REQUEST, 'Invalied Semester Code')
  }
  const result = await AcaSem.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const deleteSemesterServices = async (id: string) => {
  const result = await AcaSem.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  )
  return result
}
