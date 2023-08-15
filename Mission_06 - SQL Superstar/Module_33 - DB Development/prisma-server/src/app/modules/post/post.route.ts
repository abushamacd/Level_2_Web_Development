import express from 'express'
const router = express.Router()
import { createPost, getPost, getPosts, updatePost } from './post.controller'

router.route('/').post(createPost).get(getPosts)
router.route('/:id').get(getPost).patch(updatePost)

export default router
