import { MigrationInterface, QueryRunner } from 'typeorm';

export class Items1699818792472 implements MigrationInterface {
  name = 'Items1699818792472';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "item_name" varchar NOT NULL, "item_price" integer NOT NULL, "item_desc" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "item_img_url" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "item_img_url" varchar NOT NULL, "is_main_img" boolean NOT NULL, "itemId" integer)`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_item_img_url" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "item_img_url" varchar NOT NULL, "is_main_img" boolean NOT NULL, "itemId" integer, CONSTRAINT "FK_705f1a9ef42711831f9a8b67cc9" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_item_img_url"("id", "item_img_url", "is_main_img", "itemId") SELECT "id", "item_img_url", "is_main_img", "itemId" FROM "item_img_url"`,
    );
    await queryRunner.query(`DROP TABLE "item_img_url"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_item_img_url" RENAME TO "item_img_url"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item_img_url" RENAME TO "temporary_item_img_url"`,
    );
    await queryRunner.query(
      `CREATE TABLE "item_img_url" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "item_img_url" varchar NOT NULL, "is_main_img" boolean NOT NULL, "itemId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "item_img_url"("id", "item_img_url", "is_main_img", "itemId") SELECT "id", "item_img_url", "is_main_img", "itemId" FROM "temporary_item_img_url"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_item_img_url"`);
    await queryRunner.query(`DROP TABLE "item_img_url"`);
    await queryRunner.query(`DROP TABLE "item"`);
  }
}
