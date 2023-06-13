import { Response } from 'express'

type IApiRes<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  }
  result?: T | null
}

export const sendRes = <T>(res: Response, data: IApiRes<T>): void => {
  const resData: IApiRes<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    result: data.result || null,
  }
  res.status(data.statusCode).send(resData)
}
