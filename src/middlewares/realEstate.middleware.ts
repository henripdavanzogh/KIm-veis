import { NextFunction, Request, Response } from "express";
import RealEstate from "../entities/RealEstate.entity";
import AppError from "../errors/AppErrors.error";
import { realEstateRepo } from "../repositories";

export const verifyRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = req.body;

  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: Number(realEstateId),
    },
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  return next();
};
