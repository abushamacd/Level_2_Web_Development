/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './utilities/logger'
import { Server } from 'http'
let server: Server

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

// db connection
async function dbConnect() {
  try {
    await mongoose.connect(config.db_uri as string)
    server = app.listen(config.port, (): void => {
      logger.info(
        `==== ✌️  Your server is running on http://localhost:${config.port} ====`
      )
    })
    logger.info(`==== ✌️  DB Connection is succesfully ====`)
  } catch (error) {
    errorLogger.error(`==== 🤞  Database Connection Error ====`, error)
  }

  process.on('unhandledRejection', error => {
    console.log(error)
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

dbConnect()

process.on('SIGTERM', () => {
  logger.info(`Sigterm is received`)
  if (server) {
    server.close()
  }
})
