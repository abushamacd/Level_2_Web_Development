import express from 'express'
const router = express.Router()
import userRoute from '../modules/users/user.route'
import acaSemRoute from '../modules/academicSemester/acaSem.route'

const appRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/acasem',
    route: acaSemRoute,
  },
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
