import { Model } from 'mongoose'

export type IAcaSem = {
  title: string
  year: number
  code: string
  startMonth: string
  endMonth: string
}

export type AcaSemModel = Model<IAcaSem, Record<string, unknown>>
