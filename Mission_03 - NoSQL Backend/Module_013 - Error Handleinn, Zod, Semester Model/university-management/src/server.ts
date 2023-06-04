import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './utilities/logger'

// db connection
async function dbConnect() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, (): void => {
      logger.info(
        `==== ✌️  Your server is running on http://localhost:${config.port} ====`
      )
    })
    logger.info(`==== ✌️  DB Connection is succesfully ====`)
  } catch (error) {
    errorLogger.error(`==== 🤞  Database Connection Error ====`, error)
  }
}

dbConnect()
