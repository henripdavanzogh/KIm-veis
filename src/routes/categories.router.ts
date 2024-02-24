import { Router } from "express";
import {
  verifyAdmin,
  verifyBody,
  verifyToken,
} from "../middlewares/globals.middleware";
import { verifyUniqueCategoryName } from "../middlewares/addresses.middleware";
import { verifyCategoryExists } from "../middlewares/categories.middleware";
import { createCategorySchema } from "../schemas/categories.schema";
import {
  createCategoryController,
  readAllCategoriesController,
  readRealEstatesByCategoryController,
} from "../controllers/categories.controller";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
  "/",
  verifyBody(createCategorySchema),
  verifyToken,
  verifyAdmin,
  verifyUniqueCategoryName,
  createCategoryController
);
categoriesRouter.get(
  "/",
  readAllCategoriesController /* Lista todas as categorias */
);
categoriesRouter.get(
  "/:id/realEstate",
  verifyCategoryExists,
  readRealEstatesByCategoryController /* Lista todos os imóveis que pertencem a uma categoria */
);
