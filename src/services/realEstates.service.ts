import { Category, RealEstate } from "../entities";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";
import { CreateRealEstate } from "../interfaces/realEstates.interface";
import AppError from "../errors/AppErrors.error";

export const createRealEstateService = async (
  data: CreateRealEstate
): Promise<RealEstate> => {
  const category: Category | null = await categoryRepo.findOneBy({
    id: data.categoryId,
  });

  if (!category) throw new AppError("Category not found", 404);

  const address = await addressRepo.save(data.address);

  const realEstate = await realEstateRepo.save({
    ...data,
    address: address,
    category: category!,
  });

  return realEstate;
};

export const readAllRealEstateService = async (): Promise<RealEstate[]> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};
