import config from '../../../config'
import { AcaSem } from '../academicSemester/acaSem.model'
import { IStudent } from '../student/student.interface'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateStudentId } from './user.utils'

export const createStudentService = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.student_default_pass as string
  }
  // set role
  user.role = 'student'

  const academicsemester = await AcaSem.findById(student.academicSemester)

  const id = await generateStudentId(academicsemester)
  user.id = id
  student.id = id

  //
  const result = await User.create(user)
  if (!result) {
    throw new Error('User create failed')
  }
  return result
}
