import { NextFunction, Request, Response } from 'express'
import { createUserService } from './user.services'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
