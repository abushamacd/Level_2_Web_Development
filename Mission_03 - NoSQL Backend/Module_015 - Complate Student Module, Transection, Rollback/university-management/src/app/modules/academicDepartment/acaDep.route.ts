import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
} from './acaDep.controller'
import {
  createAcaDepZodSchema,
  updateAcaDepZodSchema,
} from './acaDep.validations'

const router = express.Router()

router
  .route('/')
  .post(reqValidate(createAcaDepZodSchema), createDepartment)
  .get(getAllDepartments)

router
  .route('/:id')
  .get(getSingleDepartment)
  .patch(reqValidate(updateAcaDepZodSchema), updateDepartment)
  .delete(deleteDepartment)

export default router
