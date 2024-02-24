import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Schedule from "./Schedule.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;

  @Column({ length: 45 })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const rounds: number = getRounds(this.password);

    if (!rounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}
