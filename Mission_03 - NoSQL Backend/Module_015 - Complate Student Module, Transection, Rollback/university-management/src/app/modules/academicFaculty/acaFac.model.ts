import { Schema, model } from 'mongoose'
import { IAcaFac, AcaFacModel } from './acaFac.interfaces'

const AcaFacSchema = new Schema<IAcaFac, AcaFacModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const AcaFac = model<IAcaFac, AcaFacModel>(
  'Academic_Faculty',
  AcaFacSchema
)
