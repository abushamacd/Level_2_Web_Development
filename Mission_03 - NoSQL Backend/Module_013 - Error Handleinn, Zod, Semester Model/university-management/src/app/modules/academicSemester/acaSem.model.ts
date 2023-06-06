import { Schema, model } from 'mongoose'
import { AcaSemModel, IAcaSem, Month } from './acaSem.interface'

const months: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const acaSemSchema = new Schema<IAcaSem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      enum: ['Autumn', 'Summer', 'Fall'],
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03'],
      trim: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  }
)

export const AcaSem = model<IAcaSem, AcaSemModel>(
  'Academic_Semester',
  acaSemSchema
)
