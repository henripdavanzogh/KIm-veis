import { Router } from "express";
import {
  verifyAdmin,
  verifyBody,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  verifyUniqueUserEmail,
  verifyUserExists,
} from "../middlewares/users.middleware";
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  updatedUserController,
} from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

export const userRouter: Router = Router();

userRouter.post(
  "/",
  verifyBody(createUserSchema),
  verifyUniqueUserEmail,
  createUserController
);
userRouter.get("/", verifyToken, verifyAdmin, readAllUsersController);

userRouter.patch(
  "/:id",
  verifyBody(updateUserSchema),
  verifyUserExists,
  verifyToken,
  verifyPermissions,
  updatedUserController
);

userRouter.delete(
  "/:id",
  verifyToken,
  verifyUserExists,
  verifyAdmin,
  deleteUserController
);
