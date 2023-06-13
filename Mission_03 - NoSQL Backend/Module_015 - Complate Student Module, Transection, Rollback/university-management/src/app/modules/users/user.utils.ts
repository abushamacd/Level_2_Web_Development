import { IAcaSem } from '../academicSemester/acaSem.interface'
import { User } from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: true, _id: false })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const generateStudentId = async (
  academicSemester: IAcaSem
): Promise<string> => {
  const currentId = (await findLastUserId()) || String(0).padStart(5, '0')
  let incrementId = String(parseInt(currentId) + 1).padStart(5, '0')
  incrementId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementId}`
  return incrementId
}
