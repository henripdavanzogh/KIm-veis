import { Router } from "express";
import {
  verifyRealEstatesSchedulesExists,
  verifyUserSchedulesExists,
} from "../middlewares/schedules.middleware";
import {
  verifyAdmin,
  verifyBody,
  verifyToken,
} from "../middlewares/globals.middleware";
import { verifyRealEstateExists } from "../middlewares/realEstate.middleware";
import {
  createScheduleController,
  readAllSchedulesRealEstatesController,
} from "../controllers/schedules.controller";
import { createScheduleSchema } from "../schemas/schedules.schema";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "/",
  verifyToken,
  verifyBody(createScheduleSchema),
  verifyRealEstateExists,
  verifyRealEstatesSchedulesExists,
  verifyUserSchedulesExists,
  createScheduleController
);
scheduleRouter.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdmin,
  readAllSchedulesRealEstatesController
);
