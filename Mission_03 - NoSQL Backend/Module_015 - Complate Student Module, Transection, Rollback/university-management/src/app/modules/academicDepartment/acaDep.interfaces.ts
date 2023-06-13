import { Model, Types } from 'mongoose'
import { IAcaFac } from '../academicFaculty/acaFac.interfaces'

export type IAcaDep = {
  title: string
  academicFaculty: Types.ObjectId | IAcaFac
}

export type AcaDepModel = Model<IAcaDep, Record<string, unknown>>

export type IAcaDepFilters = {
  searchTerm?: string
  academicFaculty?: Types.ObjectId
}
