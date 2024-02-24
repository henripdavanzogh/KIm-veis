import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Schedule from "./Schedule.entity";
import Address from "./Address.entity";
import Category from "./Category.entity";

@Entity("realEstates")
export default class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ default: 0, type: "decimal", precision: 10, scale: 2 })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updateAt: string;

  @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
  schedules: Schedule[];

  @OneToOne(() => Address, (addresses) => addresses.realEstate)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (categories) => categories.realEstate)
  category: Category;
}
