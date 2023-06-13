import { IAcaSem } from '../academicSemester/acaSem.interface'
import { User } from './user.model'

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne({}, { id: true, _id: false })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastStudent?.id
}

export const generateStudentId = async (
  academicSemester: IAcaSem
): Promise<string> => {
  const currentId = (await findLastStudentId()) || String(0).padStart(5, '0')
  let incrementId = String(parseInt(currentId) + 1).padStart(5, '0')
  incrementId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementId}`
  return incrementId
}

export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({}, { id: true, _id: false })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastFaculty?.id
}

export const generateFacultyId = async (): Promise<string> => {
  const currentId = (await findLastFacultyId()) || String(0).padStart(5, '0')
  let incrementId = String(parseInt(currentId) + 1).padStart(5, '0')
  incrementId = `F-${incrementId}`
  return incrementId
}
