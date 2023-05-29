import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";
const colors = require("colors");

const port: string | number = process.env.PORT || 4000;

// db connection
async function dbConnect() {
  try {
    await mongoose.connect(config.db_uri as string);
    app.listen(config.port, (): void => {
      console.log(
        `==== ✌️  Your server is running on http://localhost:${config.port} ====`
          .yellow.bold
      );
    });
    console.log(`==== ✌️  DB Connection is succesfully ====`.green.bold);
  } catch (error) {
    console.log(`==== 🤞  Database Connection Error ====`.red.bold);
  }
}

dbConnect();
