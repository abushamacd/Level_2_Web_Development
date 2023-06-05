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
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('+++ App Running Successfully +++')
  next()
  // Uncought Error
  // console.log(x)
  // Test Error
  // throw new Error('General Error')
  // Test API Error
  // throw new ApiError(403, 'API Error')
  // Promiss rejection
  // Promise.reject(new Error(`Unhandle Promiss Rejection`))
})

// Global error handle
app.use(globarError)

// Unknown API Handle
app.all('*', (req: Request, res: Response) => {
  res.send(`+++ Requested Route Not Found +++`)
})

export default app
