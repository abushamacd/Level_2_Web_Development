import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import userRoute from '../src/app/modules/users/user.route'
import { globarError } from './middleware/globalError'
const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Data API
app.use('/api/v1/user', userRoute)

// Testing API
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // res.send('+++ App Running Successfully +++')
  // next()
  Promise.reject(new Error('eeee'))
})

// Global error handle
app.use(globarError)

// Unknown API Handle
app.all('*', (req: Request, res: Response) => {
  res.send(`+++ Requested Route Not Found +++`)
})

export default app
