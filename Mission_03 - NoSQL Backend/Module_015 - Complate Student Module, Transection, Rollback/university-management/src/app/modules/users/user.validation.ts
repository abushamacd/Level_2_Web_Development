import { z } from 'zod'
import { bloodGroup, gender } from '../student/student.constant'

export const userZod = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
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
      bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
      presentAddress: z.string({
        required_error: 'Z: Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Z: Permanent address is required',
      }),
      academicSemester: z.string({
        required_error: 'Z: Academic semester is required',
      }),
      academicDepartment: z.string({
        required_error: 'Z: Academic department is required',
      }),
      academicFaculty: z.string({
        required_error: 'Academic faculty is required',
      }),
      guardian: z.object({
        fatherName: z.string({
          required_error: 'Z: Father name is required',
        }),
        fatherOccupation: z.string({
          required_error: 'Z: Father occupation is required',
        }),
        fatherContactNo: z.string({
          required_error: 'Z: Father contact number is required',
        }),
        motherName: z.string({
          required_error: 'Z: Mother name is required',
        }),
        motherOccupation: z.string({
          required_error: 'Z: Mother occupation is required',
        }),
        motherContactNo: z.string({
          required_error: 'Z: Mother contact number is required',
        }),
        address: z.string({
          required_error: 'Z: Guardian address is required',
        }),
      }),
      localGuardian: z.object({
        name: z.string({
          required_error: 'Z: Local guardian name is required',
        }),
        occupation: z.string({
          required_error: 'Z: Local guardian occupation is required',
        }),
        contactNo: z.string({
          required_error: 'Z: Local guardian contact number is required',
        }),
        address: z.string({
          required_error: 'Z: Local guardian address is required',
        }),
      }),
      profileImage: z.string().optional(),
    }),
  }),
})
