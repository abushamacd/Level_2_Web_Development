import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

import { globarError } from './middleware/globalError'
import routers from './app/routes'
import status from 'http-status'
const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Data API
app.use('/api/v1', routers)

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
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
