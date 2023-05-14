import express, { Application, Request, Response } from "express";
import cors from "cors";
import colors from "colors";
const app: Application = express();
app.use(cors());

// Testing API
app.get("/", (req: Request, res: Response) => {
  res.send("+++ App running Successfully +++");
});

// Unknown API Handle
app.all("*", (req: Request, res: Response) => {
  res.send(`+++ Requested Route Not Found +++`);
});

export default app;
