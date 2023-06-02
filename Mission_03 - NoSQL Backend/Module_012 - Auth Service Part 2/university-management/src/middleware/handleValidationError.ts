import mongoose from 'mongoose'
import { IErrorMessage } from '../interface/error'

export const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors: IErrorMessage[] = Object.values(err.errors).map(el => {
    return {
      path: el?.path,
      message: el?.message,
    }
  })
}
