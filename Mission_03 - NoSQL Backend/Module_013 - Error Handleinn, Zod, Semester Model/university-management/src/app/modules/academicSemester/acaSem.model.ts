import { Schema, model } from 'mongoose'
import { AcaSemModel, IAcaSem } from './acaSem.interface'
import { acaSemCodes, acaSemMonths, acaSemTitles } from './acaSem.contant'

const acaSemSchema = new Schema<IAcaSem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      enum: acaSemTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: acaSemCodes,
      trim: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: acaSemMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: acaSemMonths,
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
