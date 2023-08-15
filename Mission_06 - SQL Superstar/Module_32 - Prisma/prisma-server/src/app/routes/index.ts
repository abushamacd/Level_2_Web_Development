import express from 'express'
const router = express.Router()
import userRoute from '../modules/users/user.route'
import dataRoute from '../modules/data/data.route'

const appRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/data',
    route: dataRoute,
  },
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
