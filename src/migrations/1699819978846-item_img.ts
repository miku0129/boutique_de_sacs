import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemImg1699819978846 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "item_img_url" ("item_img_url", "is_main_img", "itemId") VALUES
            ("URL1.jpg", true, 1),
            ("URL2.jpg", true, 2),
            ("URL3.jpg", true, 3);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
