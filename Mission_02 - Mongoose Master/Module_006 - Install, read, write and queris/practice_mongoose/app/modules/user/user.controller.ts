import { NextFunction, Request, Response } from "express";
import { createUserService } from "./user.services";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createUserService();
    res.status(400).send({
      success: true,
      message: "Create user successfully",
      retust: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Create user failed",
      retust: error,
    });
  }
};
