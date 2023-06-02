import { NextFunction, Request, Response } from 'express'
import config from '../config'
import { IErrorMessage } from '../interface/error'

export const globarError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 400
  const message = 'Something went wrong'
  const errorMessage: IErrorMessage[] = []
  res.status(statusCode).send({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}
