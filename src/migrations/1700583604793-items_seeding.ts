import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemsSeeding1700583604793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "item" ("item_name", "item_price", "item_desc") VALUES
                        ("Sac1", 10.99, "Description for Sac1"),
                        ("Sac2", 19.95, "Description for Sac2"),
                        ("Sac3", 5.50, "Description for Sac3");`,
    );

    await queryRunner.query(
      `INSERT INTO "item_img_url" ("item_img_url", "is_main_img", "itemId") VALUES
                                ("URL1.jpg", true, 1),
                                ("URL2.jpg", true, 2),
                                ("URL3.jpg", true, 3);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
