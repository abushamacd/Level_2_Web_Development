import { Model } from 'mongoose'

export type IAcaSemMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcaSemTitles = 'Autumn' | 'Summer' | 'Fall'
export type IAcaSemCodes = '01' | '02' | '03'

export type IAcaSem = {
  title: IAcaSemTitles
  year: string
  code: IAcaSemCodes
  startMonth: IAcaSemMonths
  endMonth: IAcaSemMonths
}

export type IAcaSemFilters = {
  searchTerm?: string
}

export type AcaSemModel = Model<IAcaSem, Record<string, unknown>>
