import User from "./entities/User.entity";
import { AppDataSource } from "./data-source";
import Address from "./entities/Address.entity";
import RealEstate from "./entities/RealEstate.entity";
import Schedule from "./entities/Schedule.entity";
import Category from "./entities/Category.entity";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import {
  AddressRepo,
  RealEstateRepo,
} from "./interfaces/realEstates.interface";
import { UserRepo } from "./interfaces/users.interface";
import { CategoryRepo } from "./interfaces/categories.interface";

export const userRepo: UserRepo = AppDataSource.getRepository(User);

export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);

export const realEstateRepo: RealEstateRepo =
  AppDataSource.getRepository(RealEstate);

export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
