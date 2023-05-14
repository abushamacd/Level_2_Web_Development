import { IUser } from "./user.interface";
import User from "./user.schema";

export const createUserService = async (payload: IUser): Promise<IUser> => {
  const user = await User.create(payload);
  return user;
};

export const getUsersService = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserService = async (
  payload: string
): Promise<IUser | null> => {
  const users = await User.findOne({ id: payload });
  return users;
};
