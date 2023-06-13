import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { createAcaSemZod, updateAcaSemZod } from './acaSem.validation'
import {
  createAcaSem,
  deleteAcaSem,
  getAllSemesters,
  getSingleSemester,
  updateAcaSem,
} from './acaSem.controller'
const router = express.Router()

router
  .route('/:id')
  .get(getSingleSemester)
  .patch(reqValidate(updateAcaSemZod), updateAcaSem)
  .delete(deleteAcaSem)

router
  .route('/')
  .post(reqValidate(createAcaSemZod), createAcaSem)
  .get(getAllSemesters)

export default router
