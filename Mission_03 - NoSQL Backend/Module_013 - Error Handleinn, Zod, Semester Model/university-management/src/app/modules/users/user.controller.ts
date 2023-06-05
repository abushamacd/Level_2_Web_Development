import { RequestHandler } from 'express'
import { createUserService } from './user.services'
import { z } from 'zod'

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    // const userZod = z.object({
    //   body: z.object({
    //     role: z.string({
    //       required_error: 'Z: Role is required',
    //     }),
    //     password: z.string().optional(),
    //   }),
    // })

    // await userZod.parseAsync(req)

    const result = await createUserService(req.body)
    res.status(200).send({
      success: true,
      message: 'Create users successfully',
      result: result,
    })
  } catch (error) {
    next(error)
  }
}
