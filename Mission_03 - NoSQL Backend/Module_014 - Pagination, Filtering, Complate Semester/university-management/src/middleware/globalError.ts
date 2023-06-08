/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import { ErrorRequestHandler } from 'express'
import config from '../config'
import { IErrorMessage } from '../interface/error'
import { handleValidationError } from '../errorFormating/handleValidationError'
import { ApiError } from '../errorFormating/apiError'
import { errorLogger } from '../utilities/logger'
import { ZodError } from 'zod'
import { handleZodError } from '../errorFormating/handleZodError'

export const globarError: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 400
  let message = 'Something went wrong'
  let errorMessage: IErrorMessage[] = []

  // Dependency
  config.env === 'development'
    ? console.log(`Global Error Handler ==`, error)
    : errorLogger.error(`Global Error Handler ==`, error)

  //
  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  //
  res.status(statusCode).send({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
  next()
}
