import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import userRoute from '../src/app/modules/users/user.route'
const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Data API
app.use('/api/v1/user', userRoute)

// error
class ApiError extends Error {
  // statusCode: number
  constructor(
    public statusCode: number,
    public message: string | undefined,
    public stack = ''
  ) {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

// Testing API
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.send('+++ App Running Successfully +++')
  // throw new ApiError(403, 'test')
  throw new Error('test')
  // next('Error ar Error')
})

// Global error handle
app.use((err, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err })
  } else {
    res.status(404).json({ error: 'Something Wrong' })
  }
})

// Unknown API Handle
app.all('*', (req: Request, res: Response) => {
  res.send(`+++ Requested Route Not Found +++`)
})

export default app
