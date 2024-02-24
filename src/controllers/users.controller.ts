import { Request, Response } from "express";
import { ReturnUser } from "../interfaces/users.interface";
import {
  createUserService,
  deleteUserService,
  readAllUsersService,
  updateUserService,
} from "../services/users.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: ReturnUser = await createUserService(req.body);

  return res.status(201).json(user);
};

export const readAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await readAllUsersService();
  return res.status(200).json(users);
};

export const updatedUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = res.locals;
  const { admin, ...rest } = req.body;
  const newUser = await updateUserService(rest, user);
  return res.status(200).json(newUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = res.locals;
  await deleteUserService(user);
  return res.status(204).json();
};
