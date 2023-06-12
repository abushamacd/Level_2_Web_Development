export type IGenericRes<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}
