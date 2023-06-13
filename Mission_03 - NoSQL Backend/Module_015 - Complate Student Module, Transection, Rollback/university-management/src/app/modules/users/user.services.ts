import mongoose from 'mongoose'
import config from '../../../config'
import { AcaSem } from '../academicSemester/acaSem.model'
import { IStudent } from '../student/student.interface'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateStudentId } from './user.utils'
import { Student } from '../student/student.model'
import status from 'http-status'
import { ApiError } from '../../../errorFormating/apiError'

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

  let newUserAllData = null
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const id = await generateStudentId(academicsemester)
    user.id = id
    student.id = id

    // create student
    const newStudent = await Student.create([student], { session })
    if (!newStudent.length) {
      throw new ApiError(status.BAD_REQUEST, 'Failed to create student')
    }

    //set student -->  _id into user.student
    user.student = newStudent[0]._id
    const newUser = await User.create([user], { session })

    if (!newUser.length) {
      throw new ApiError(status.BAD_REQUEST, 'Failed to create user')
    }
    newUserAllData = newUser[0]

    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  //
}
