import express from 'express'
const router = express.Router()
import userRoute from '../modules/users/user.route'
import profileRoute from '../modules/profile/profile.route'
import categoryRoute from '../modules/category/category.route'

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
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
