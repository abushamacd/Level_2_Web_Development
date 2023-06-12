import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { acaSemZod } from './acaSem.validation'
import {
  createAcaSem,
  getAllSemesters,
  getSingleSemester,
} from './acaSem.controller'
const router = express.Router()

router.route('/:id').get(getSingleSemester)

router
  .route('/')
  .post(reqValidate(acaSemZod), createAcaSem)
  .get(getAllSemesters)

export default router
