import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRealEstate1699046439755 implements MigrationInterface {
    name = 'UpdateRealEstate1699046439755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_fa507c259ec4989cdfa75dd7c61"`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "realEstatesId" TO "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" numeric(10,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_ac3131bb922483053abebc5e9ff" FOREIGN KEY ("realEstateId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_ac3131bb922483053abebc5e9ff"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" character varying NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categoriesId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "realEstateId" TO "realEstatesId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_fa507c259ec4989cdfa75dd7c61" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9" FOREIGN KEY ("realEstatesId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
