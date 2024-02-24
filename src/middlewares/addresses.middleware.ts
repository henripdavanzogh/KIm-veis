import { NextFunction, Request, Response } from "express";
import { addressRepo, categoryRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import { Address, Category } from "../entities";

export const verifyUniqueCategoryName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  const categoryExists: Category | null = await categoryRepo.findOne({
    where: {
      name: name,
    },
  });

  if (categoryExists) throw new AppError("Category already exists", 409);

  return next();
};

export const verifyUniqueAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;

  if (!address) return next();

  const addressExists: Address | null = await addressRepo.findOne({
    where: {
      street: address.street,
      zipCode: address.zipCode,
      number: address.number,
      city: address.city,
      state: address.state,
    },
  });

  if (addressExists) throw new AppError("Address already exists", 409);

  return next();
};
