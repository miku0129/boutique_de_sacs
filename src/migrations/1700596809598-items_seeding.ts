import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemsSeeding1700596809598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "item" ("item_name", "item_price", "item_desc") VALUES
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Sac", 30, "Explication un sac."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier."),
                                    ("Panier", 30, "Explication un panier.");

`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
