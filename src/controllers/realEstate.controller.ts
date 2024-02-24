import { Request, Response } from "express";
import {
  createRealEstateService,
  readAllRealEstateService,
} from "../services/realEstates.service";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate = await createRealEstateService(req.body);

  return res.status(201).json(realEstate);
};

export const readAllRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate = await readAllRealEstateService();

  return res.status(200).json(realEstate);
};
