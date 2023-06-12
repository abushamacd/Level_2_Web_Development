import { Schema, model } from 'mongoose'
import { AcaDepModel, IAcaDep } from './acaDep.interfaces'

const AcaDepSchema = new Schema<IAcaDep, AcaDepModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'academic_faculty',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const AcaDep = model<IAcaDep, AcaDepModel>(
  'academic_department',
  AcaDepSchema
)
