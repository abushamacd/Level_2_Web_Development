import { z } from 'zod'
import { acaSemCodes, acaSemMonths, acaSemTitles } from './acaSem.contant'

export const createAcaSemZod = z.object({
  body: z.object({
    title: z.enum([...acaSemTitles] as [string, ...string[]], {
      required_error: 'Z: Title is required',
    }),
    year: z.string({
      required_error: 'Z: Year is required',
    }),
    code: z.enum([...acaSemCodes] as [string, ...string[]], {
      required_error: 'Z: Semester Code is required',
    }),
    startMonth: z.enum([...acaSemMonths] as [string, ...string[]], {
      required_error: 'Z: Start month Code is required',
    }),
    endMonth: z.enum([...acaSemMonths] as [string, ...string[]], {
      required_error: 'Z: End month Code is required',
    }),
  }),
})

export const updateAcaSemZod = z
  .object({
    body: z.object({
      title: z
        .enum([...acaSemTitles] as [string, ...string[]], {
          required_error: 'Z: Title is required',
        })
        .optional(),
      year: z
        .number({
          required_error: 'Z: Year is required',
        })
        .optional(),
      code: z
        .enum([...acaSemCodes] as [string, ...string[]], {
          required_error: 'Z: Semester Code is required',
        })
        .optional(),
      startMonth: z
        .enum([...acaSemMonths] as [string, ...string[]], {
          required_error: 'Z: Start month Code is required',
        })
        .optional(),
      endMonth: z
        .enum([...acaSemMonths] as [string, ...string[]], {
          required_error: 'Z: End month Code is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either title and code both should be provide or neither',
    }
  )
