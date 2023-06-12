import { SortOrder } from 'mongoose'

export type IPeginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  // sortOrder?: 'asc' | 'desc'
  sortOrder?: SortOrder
}

export type IpageCalResult = {
  page: number
  limit: number
  skip: number
  sortBy: string
  sortOrder: SortOrder
}
