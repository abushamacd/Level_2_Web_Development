import { SortOrder } from 'mongoose'
import { acaDepSearchableFields } from './acaDep.constants'
import { IAcaDep, IAcaDepFilters } from './acaDep.interfaces'
import { AcaDep } from './acaDep.model'
import { IPeginationOptions } from '../../../interface/pagination'
import { IGenericRes } from '../../../interface/genericRes'
import { pageCalculate } from '../../../helpers/paginationHelper'

export const getAllDepartmentsService = async (
  filters: IAcaDepFilters,
  paginationOptions: IPeginationOptions
): Promise<IGenericRes<IAcaDep[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    pageCalculate(paginationOptions)

  const { searchTerm, ...filtersData } = filters

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: acaDepSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $paginationOptions: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await AcaDep.find(whereConditions)
    .populate('academicFaculty')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await AcaDep.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const createDepartmentService = async (
  payload: IAcaDep
): Promise<IAcaDep | null> => {
  const result = (await AcaDep.create(payload)).populate('academicFaculty')
  return result
}

export const getSingleDepartmentService = async (
  id: string
): Promise<IAcaDep | null> => {
  const result = await AcaDep.findById(id).populate('academicFaculty')
  return result
}

export const updateDepartmentService = async (
  id: string,
  payload: Partial<IAcaDep>
): Promise<IAcaDep | null> => {
  const result = await AcaDep.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate('academicFaculty')
  return result
}

export const deleteDepartmentService = async (
  id: string
): Promise<IAcaDep | null> => {
  const result = await AcaDep.findByIdAndDelete(id)
  return result
}
