import { z } from 'zod';
import { designation } from './faculty.constant';
import { bloodGroup } from '../../../constants/bloodGroup';
import { gender } from '../../../constants/gender';

const createFacultyZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    faculty: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'Z: First name is required',
        }),
        lastName: z.string({
          required_error: 'Z: Last name is required',
        }),
        middleName: z.string().optional(),
      }),
      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'Z: Gender is required',
      }),
      dateOfBirth: z.string({
        required_error: 'Z: Date of birth is required',
      }),
      email: z
        .string({
          required_error: 'Z: Email is required',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Z: Contact number is required',
      }),
      emergencyContactNo: z.string({
        required_error: 'Z: Emergency contact number is required',
      }),
      presentAddress: z.string({
        required_error: 'Z: Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Z: Permanent address is required',
      }),
      bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
      designation: z.enum([...designation] as [string, ...string[]], {
        required_error: 'Z: Designation is required',
      }),
      academicDepartment: z.string({
        required_error: 'Z: Academic department is required',
      }),
      academicFaculty: z.string({
        required_error: 'Z: Academic faculty is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});

const updateFacultyZodSchema = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        middleName: z.string().optional(),
      })
      .optional(),
    gender: z.enum([...gender] as [string, ...string[]]).optional(),
    dateOfBirth: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
    designation: z.enum([...designation] as [string, ...string[]]).optional(),
    academicDepartment: z.string().optional(),
    academicFaculty: z.string().optional(),
    profileImage: z.string().optional(),
  }),
});

export const FacultyValidaion = {
  createFacultyZodSchema,
  updateFacultyZodSchema,
};
