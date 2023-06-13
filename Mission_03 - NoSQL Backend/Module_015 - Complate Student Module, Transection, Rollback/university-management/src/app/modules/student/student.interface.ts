import { Model, Types } from 'mongoose'
import { IAcaFac } from '../academicFaculty/acaFac.interfaces'
import { IAcaDep } from '../academicDepartment/acaDep.interfaces'
import { IAcaSem } from '../academicSemester/acaSem.interface'

export type UserName = {
  firstName: string
  lastName: string
  middleName?: string
}

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
  address: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type IStudent = {
  id: string
  name: UserName //embedded object
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian // embedded object
  localGuardian: LocalGuardian // embedded object
  academicFaculty: Types.ObjectId | IAcaFac // reference _id
  academicDepartment: Types.ObjectId | IAcaDep // // reference _id
  academicSemester: Types.ObjectId | IAcaSem // reference _id
  profileImage?: string
}

export type StudentModel = Model<IStudent, Record<string, unknown>>
