import { IPeginationOptions, IpageCalResult } from '../interface/pagination'

export const pageCalculate = (options: IPeginationOptions): IpageCalResult => {
  // eslint-disable-next-line no-console
  //   console.log(options)
  const page = Number(options.page || 1)
  const limit = Number(options.limit || 10)
  const sortBy = options.sortBy || 'createdAt'
  const sortOrder = options.sortOrder || 'desc'
  const skip = (page - 1) * limit

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  }
}
