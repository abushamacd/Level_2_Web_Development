import { NextFunction, Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUsersService,
} from "./user.services";
import { IUser } from "./user.interface";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: IUser = req.body;
    const result = await createUserService(data);
    res.status(200).send({
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

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUsersService();
    res.status(200).send({
      success: true,
      message: "Get users successfully",
      retust: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Get users failed",
      retust: error,
    });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await getUserService(id);
    res.status(200).send({
      success: true,
      message: "Get users successfully",
      retust: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Get users failed",
      retust: error,
    });
  }
};
