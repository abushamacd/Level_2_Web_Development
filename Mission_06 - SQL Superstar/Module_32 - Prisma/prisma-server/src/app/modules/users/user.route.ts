import express from 'express'
const router = express.Router()
import { createUser, getUsers } from './user.controller'

router.route('/').post(createUser).get(getUsers)

export default router
