import express, { Application, Request, Response } from "express";
import cors from "cors";
import colors from "colors";
import userRoute from "../app/modules/user/user.route";
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data API
app.use("/api/v1/user", userRoute);

// Testing API
app.get("/", (req: Request, res: Response) => {
  res.send("+++ App Running Successfully +++");
});

// Unknown API Handle
app.all("*", (req: Request, res: Response) => {
  res.send(`+++ Requested Route Not Found +++`);
});

export default app;
