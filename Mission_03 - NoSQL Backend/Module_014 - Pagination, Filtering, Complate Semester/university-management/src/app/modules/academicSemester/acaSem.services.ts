import { ApiError } from '../../../errorFormating/apiError'
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
): Promise<IAcaSem | null> => {
  // eslint-disable-next-line no-console
  console.log(payload)
  const result = null
  // const result = await AcaSem.create(payload)
  return result
}
