import { IAcaSem } from './acaSem.interface'
import { AcaSem } from './acaSem.model'

export const createAcaSemService = async (
  payload: IAcaSem
): Promise<IAcaSem | null> => {
  const result = await AcaSem.create(payload)
  if (!result) {
    throw new Error('Academic Semester create failed')
  }
  return result
}
