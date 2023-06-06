import { z } from 'zod'

export const acaSemZod = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall'], {
      required_error: 'Z: Title is required',
    }),
    year: z.number({
      required_error: 'Z: Year is required',
    }),
    code: z.enum(['01', '02', '03'], {
      required_error: 'Z: Semester Code is required',
    }),
    startMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        required_error: 'Z: Start month Code is required',
      }
    ),
    endMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        required_error: 'Z: End month Code is required',
      }
    ),
  }),
})
