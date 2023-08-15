import express from 'express'
const router = express.Router()
import {
  createProfile,
  getProfile,
  getProfiles,
  updateProfile,
} from './profile.controller'

router.route('/').post(createProfile).get(getProfiles)
router.route('/:id').get(getProfile).patch(updateProfile)

export default router
