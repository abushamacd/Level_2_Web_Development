import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

// db connection
async function dbConnect() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, (): void => {
      console.log(
        `==== ✌️  Your server is running on http://localhost:${config.port} ====`
      )
    })
    console.log(`==== ✌️  DB Connection is succesfully ====`)
  } catch (error) {
    console.log(`==== 🤞  Database Connection Error ====`)
  }
}

dbConnect()
