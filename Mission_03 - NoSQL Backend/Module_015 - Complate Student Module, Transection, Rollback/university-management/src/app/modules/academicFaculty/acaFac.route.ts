import express from 'express'
import {
  createFaculty,
  deleteFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
} from './acaFac.controller'
import reqValidate from '../../../middleware/reqValidate'
import {
  // createFacultyZodSchema,
  updatefacultyZodSchema,
} from './acaFac.validations'

const router = express.Router()

router
  .route('/:id')
  .get(getSingleFaculty)
  .patch(reqValidate(updatefacultyZodSchema), updateFaculty)
  .delete(deleteFaculty)

router
  .route('/')
  .get(getAllFaculties)
  // .post(reqValidate(createFacultyZodSchema), createFaculty)
  .post(createFaculty)

export default router
