import express from 'express'
const router = express.Router()
import {
  createCategory,
  getCategory,
  getCategorys,
  updateCategory,
} from './category.controller'

router.route('/').post(createCategory).get(getCategorys)
router.route('/:id').get(getCategory).patch(updateCategory)

export default router
