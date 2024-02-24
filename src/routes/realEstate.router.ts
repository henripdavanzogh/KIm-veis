import { Router } from "express";
import {
  verifyAdmin,
  verifyBody,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  createRealEstateController,
  readAllRealEstateController,
} from "../controllers/realEstate.controller";
import { createRealEstateSchema } from "../schemas/realEstates.schema";
import { verifyUniqueAddress } from "../middlewares/addresses.middleware";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "/",
  verifyToken,
  verifyAdmin,
  verifyBody(createRealEstateSchema),
  verifyUniqueAddress,
  createRealEstateController
);
realEstateRouter.get("/", readAllRealEstateController);
