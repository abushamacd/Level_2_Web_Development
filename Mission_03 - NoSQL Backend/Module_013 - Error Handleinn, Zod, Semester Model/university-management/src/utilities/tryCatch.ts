import { NextFunction, Request, Response } from 'express'

export const tryCatch = fn => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res)
    } catch (error) {
      next(error)
    }
  }
}
