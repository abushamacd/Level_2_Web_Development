import { RequestHandler } from 'express'
import { createUserService } from './user.services'

export const createUser: RequestHandler = async (req, res, next) => {
  try {
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
