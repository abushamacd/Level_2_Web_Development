import { Model } from 'mongoose'

export type IAcaFac = {
  title: string
}

export type AcaFacModel = Model<IAcaFac, Record<string, unknown>>

export type IAcaFacFilters = {
  searchTerm?: string
}
