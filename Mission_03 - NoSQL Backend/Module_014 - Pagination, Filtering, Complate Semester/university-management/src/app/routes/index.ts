import express from 'express'
const router = express.Router()
import userRoute from '../modules/users/user.route'
import acaSemRoute from '../modules/academicSemester/acaSem.route'
import acaFacRoute from '../modules/academicFaculty/acaFac.route'

const appRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/acasem',
    route: acaSemRoute,
  },
  {
    path: '/acaFac',
    route: acaFacRoute,
  },
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
