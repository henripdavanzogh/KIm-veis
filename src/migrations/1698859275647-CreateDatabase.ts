import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1698859275647 implements MigrationInterface {
    name = 'CreateDatabase1698859275647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
