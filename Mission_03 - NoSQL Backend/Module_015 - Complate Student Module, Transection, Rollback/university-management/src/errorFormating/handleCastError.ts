import mongoose from 'mongoose'
import { IErrorMessage } from '../interface/error'

export const handleCastError = (err: mongoose.Error.CastError) => {
  const errors: IErrorMessage[] = [
    {
      path: err.path,
      message: 'Invalid Id',
    },
  ]
  return {
    statusCode: 500,
    message: 'Cast Error',
    errorMessage: errors,
  }
}
