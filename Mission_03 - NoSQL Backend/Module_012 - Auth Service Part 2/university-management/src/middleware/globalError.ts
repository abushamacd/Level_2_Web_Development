import { NextFunction, Request, Response } from 'express'
import config from '../config'
import { IErrorMessage } from '../interface/error'
import { handleValidationError } from './handleValidationError'
import { ApiError } from './apiError'

export const globarError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 400
  let message = 'Something went wrong'
  let errorMessage: IErrorMessage[] = []

  //
  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err?.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }

  //
  res.status(statusCode).send({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}
