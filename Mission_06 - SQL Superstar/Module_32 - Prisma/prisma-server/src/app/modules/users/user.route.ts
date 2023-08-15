import express from 'express'
const router = express.Router()
import { createUser } from './user.controller'

router.route('/').post(createUser)

export default router
