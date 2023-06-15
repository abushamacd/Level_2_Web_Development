import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interfaces';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interfaces';

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IFaculty = {
  id: string;
  name: UserName; // embedded object
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  designation: 'Professor' | 'Lecturer';
  academicDepartment: Types.ObjectId | IAcademicDepartment; // reference to academic department
  academicFaculty: Types.ObjectId | IAcademicFaculty; // reference to academic faculty
  profileImage?: string;
};

export type FacultyModel = Model<IFaculty, Record<string, unknown>>;
