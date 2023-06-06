import { z } from 'zod'
import { acaSemCodes, acaSemMonths, acaSemTitles } from './acaSem.contant'

export const acaSemZod = z.object({
  body: z.object({
    title: z.enum([...acaSemTitles] as [string, ...string[]], {
      required_error: 'Z: Title is required',
    }),
    year: z.number({
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
