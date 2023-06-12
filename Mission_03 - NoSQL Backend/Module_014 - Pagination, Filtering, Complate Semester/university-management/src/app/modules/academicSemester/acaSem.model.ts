import { Schema, model } from 'mongoose'
import { AcaSemModel, IAcaSem } from './acaSem.interface'
import { acaSemCodes, acaSemMonths, acaSemTitles } from './acaSem.contant'
import status from 'http-status'
import { ApiError } from '../../../errorFormating/apiError'

const acaSemSchema = new Schema<IAcaSem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      enum: acaSemTitles,
    },
    year: {
      type: String,
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
    toJSON: {
      virtuals: true,
    },
  }
)

acaSemSchema.pre('save', async function (next) {
  const isExist = await AcaSem.findOne({ title: this.title, year: this.year })
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic Semester is alreadey exist')
  }
  next()
})

export const AcaSem = model<IAcaSem, AcaSemModel>(
  'Academic_Semester',
  acaSemSchema
)
