import { MigrationInterface, QueryRunner } from 'typeorm';

export class Items1699819466578 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "item" ("item_name", "item_price", "item_desc") VALUES
      ("Sac1", 10.99, "Description for Sac1"),
      ("Sac2", 19.95, "Description for Sac2"),
      ("Sac3", 5.50, "Description for Sac3");`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
