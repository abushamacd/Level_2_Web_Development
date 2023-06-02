import { NextFunction, Request, Response } from 'express'

export const globarError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).send({
    success: false,
    message: 'Create users failed',
    result: err,
  })
  next()
}
