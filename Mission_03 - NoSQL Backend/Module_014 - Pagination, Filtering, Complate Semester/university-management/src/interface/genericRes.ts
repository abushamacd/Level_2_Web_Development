export type IGenericRes<T> = {
  meta: {
    page?: number | null
    limit?: number | null
    total?: number | null
  }
  data: T
}
