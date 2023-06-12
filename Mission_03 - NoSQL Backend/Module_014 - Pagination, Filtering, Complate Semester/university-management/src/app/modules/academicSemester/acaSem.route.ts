import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { acaSemZod } from './acaSem.validation'
import { createAcaSem, getAllSemesters } from './acaSem.controller'
const router = express.Router()

router
  .route('/')
  .post(reqValidate(acaSemZod), createAcaSem)
  .get(getAllSemesters)

export default router
