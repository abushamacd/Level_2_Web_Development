import { Schema, model } from 'mongoose'
import { AcaSemModel, IAcaSem } from './acaSem.interface'

const acaSemSchema = new Schema<IAcaSem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
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
