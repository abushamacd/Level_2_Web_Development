import express from 'express'
const router = express.Router()
import userRoute from '../modules/users/user.route'
import profileRoute from '../modules/profile/profile.route'
import categoryRoute from '../modules/category/category.route'
import postRoute from '../modules/post/post.route'

const appRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/profile',
    route: profileRoute,
  },
  {
    path: '/category',
    route: categoryRoute,
  },
  {
    path: '/post',
    route: postRoute,
  },
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
