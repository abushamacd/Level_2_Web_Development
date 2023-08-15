import { z } from 'zod'

export const updateUserZod = z.object({
  body: z.object({
    phoneNumber: z.string().optional(),
    password: z.string().optional(),
  }),
})
