import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { acaSemZod } from './acaSem.validation'
const router = express.Router()

router.route('/').post(reqValidate(acaSemZod))

export default router
