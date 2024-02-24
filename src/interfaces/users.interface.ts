import { z } from "zod";
import {
  createUserSchema,
  loginSchema,
  userReturnSchema,
} from "../schemas/users.schema";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/User.entity";

export type CreateUser = z.infer<typeof createUserSchema>;
export type BodyUserUpdate = Omit<CreateUser, "admin">;
export type UpdateUser = DeepPartial<BodyUserUpdate>;
export type ReturnUser = z.infer<typeof userReturnSchema>;
export type ReadReturnUser = ReturnUser[];
export type UserLogin = z.infer<typeof loginSchema>;
export type ReturnLogin = { token: string };

export type UserRepo = Repository<User>;
