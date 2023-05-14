import express, { Application, Request, Response } from "express";
import cors from "cors";
import colors from "colors";
const app: Application = express();
import { Schema, model, connect } from "mongoose";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing API
app.get("/", (req: Request, res: Response) => {
  res.send("+++ App running Successfully +++");
});

// Testing API
app.get("/user", (req: Request, res: Response) => {
  //   create user interface
  interface IUser {
    id: string;
    role: string;
    name: {
      firstName: string;
      lastName: string;
    };
    password: string;
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emargencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emargencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });
});

// Unknown API Handle
app.all("*", (req: Request, res: Response) => {
  res.send(`+++ Requested Route Not Found +++`);
});

export default app;
