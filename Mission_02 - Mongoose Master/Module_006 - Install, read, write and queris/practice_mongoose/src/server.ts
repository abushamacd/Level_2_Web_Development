import mongoose from "mongoose";
import app from "./app";
const colors = require("colors");

const port: string | number = process.env.PORT || 4000;

app.listen(port, (): void => {
  console.log(
    `==== Your server is running on http://localhost:${port} ====`.yellow.bold
  );
});

// db connection
async function dbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`==== DB Connection is succesfully ====`.green.bold);
  } catch (error) {
    console.log(`==== Database Connection Error ====`.red.bold);
  }
}

dbConnect();
