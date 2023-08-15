import express from 'express'
const router = express.Router()
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from './post.controller'

router.route('/').post(createPost).get(getPosts)
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost)

export default router
