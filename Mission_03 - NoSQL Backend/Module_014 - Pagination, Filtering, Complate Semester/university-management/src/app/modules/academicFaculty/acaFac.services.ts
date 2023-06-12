import { SortOrder } from 'mongoose'
import { acaFacSearchableFields } from './acaFac.constants'
import { IAcaFac, IAcaFacFilters } from './acaFac.interfaces'
import { AcaFac } from './acaFac.model'
import { IPeginationOptions } from '../../../interface/pagination'
import { IGenericRes } from '../../../interface/genericRes'
import { pageCalculate } from '../../../helpers/paginationHelper'

const createFaculty = async (payload: IAcaFac): Promise<IAcaFac | null> => {
  const result = await AcaFac.create(payload)
  return result
}

const getAllFaculties = async (
  filters: IAcaFacFilters,
  paginationOptions: IPeginationOptions
): Promise<IGenericRes<IAcaFac[]>> => {
  const { searchTerm, ...filtersData } = filters
  const { page, limit, skip, sortBy, sortOrder } =
    pageCalculate(paginationOptions)

  const searchConditions = []

  if (searchTerm) {
    searchConditions.push({
      $or: acaFacSearchableFields.map(field => ({
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

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const filterConditions =
    searchConditions.length > 0 ? { $and: searchConditions } : {}

  const result = await AcaFac.find(filterConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await AcaFac.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getSingleFaculty = async (id: string): Promise<IAcaFac | null> => {
  const result = await AcaFac.findById(id)
  return result
}

const updateFaculty = async (
  id: string,
  payload: Partial<IAcaFac>
): Promise<IAcaFac | null> => {
  const result = await AcaFac.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteByIdFromDB = async (id: string): Promise<IAcaFac | null> => {
  const result = await AcaFac.findByIdAndDelete(id)
  return result
}

export const AcaFacService = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteByIdFromDB,
}
