import express from 'express'
import { createUser } from './user.controller'
import { userZod } from './user.validation'
import reqValidate from './../../../middleware/reqValidate'
const router = express.Router()

router.route('/').post(reqValidate(userZod), createUser)

export default router
