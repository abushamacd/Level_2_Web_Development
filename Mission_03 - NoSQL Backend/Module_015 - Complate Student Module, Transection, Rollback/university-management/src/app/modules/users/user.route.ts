import express from 'express'
import { createStudent } from './user.controller'
import { userZod } from './user.validation'
import reqValidate from './../../../middleware/reqValidate'
const router = express.Router()

router.route('/create-student').post(reqValidate(userZod), createStudent)

export default router
