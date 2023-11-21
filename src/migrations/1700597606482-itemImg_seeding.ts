import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemImgSeeding1700597606482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "item_img_url" ("item_img_url", "is_main_img", "itemId") VALUES

                                            ("https://i.ibb.co/JjP80Nx/Whats-App-Image-2023-10-25-at-17-32-06.jpg", true, 1),
                                            ("https://i.ibb.co/XssgBtX/Whats-App-Image-2023-10-25-at-17-32-13.jpg", true, 2),
                                            ("https://i.ibb.co/pZSv4yS/Whats-App-Image-2023-10-25-at-17-34-39.jpg", true, 3),
                                            ("https://i.ibb.co/wcg5syF/Whats-App-Image-2023-10-25-at-17-34-39-1.jpg", true, 4),
                                            ("https://i.ibb.co/yV8jmhy/Whats-App-Image-2023-10-25-at-17-34-40.jpg", true, 5),
                                            ("https://i.ibb.co/jRkxwTg/Whats-App-Image-2023-10-25-at-17-34-40-1.jpg", true, 6),
                                            ("https://i.ibb.co/RBCTmJZ/Whats-App-Image-2023-10-25-at-17-34-41.jpg", true, 7),
                                            ("https://i.ibb.co/x6jJ0hY/Whats-App-Image-2023-10-25-at-17-34-42.jpg", true, 8),
                                            ("https://i.ibb.co/nsDYSyG/Whats-App-Image-2023-10-25-at-17-34-43.jpg", true, 9),
                                            ("https://i.ibb.co/pr3MPxV/Whats-App-Image-2023-10-25-at-17-34-44.jpg", true, 10),
                                            ("https://i.ibb.co/KxkwBfj/Whats-App-Image-2023-10-25-at-17-34-44-1.jpg", true, 11),
                                            ("https://i.ibb.co/02bHSyL/Whats-App-Image-2023-10-25-at-17-34-47.jpg", true, 12),
                                            ("https://i.ibb.co/v4msQRj/Whats-App-Image-2023-10-25-at-17-34-48.jpg", true, 13),
                                            ("https://i.ibb.co/KNVVfWR/Whats-App-Image-2023-10-25-at-17-34-48-1.jpg", true, 14),
                                            ("https://i.ibb.co/XkZq5hx/Whats-App-Image-2023-10-25-at-17-34-49.jpg", true, 15),
                                            ("https://i.ibb.co/F0y9Jkz/Whats-App-Image-2023-10-25-at-17-34-49-1.jpg", true, 16),
                                            ("https://i.ibb.co/KWVwVBd/Whats-App-Image-2023-10-25-at-17-34-51.jpg", true, 17),
                                            ("https://i.ibb.co/7g6zVxz/Whats-App-Image-2023-10-25-at-17-34-56.jpg", true, 18),
                                            ("https://i.ibb.co/02k7GMB/Whats-App-Image-2023-10-25-at-17-34-50.jpg", true, 19),
                                            ("https://i.ibb.co/4Fdk4Yt/Whats-App-Image-2023-10-25-at-17-34-50-1.jpg", true, 20),
                                            ("https://i.ibb.co/W2MNTxZ/Whats-App-Image-2023-10-25-at-17-34-53.jpg", true, 21),
                                            ("https://i.ibb.co/zRMZRTW/Whats-App-Image-2023-10-25-at-17-34-53-1.jpg", true, 22),
                                            ("https://i.ibb.co/8cC9fSh/Whats-App-Image-2023-10-25-at-17-34-53-2.jpg", true, 23),
                                            ("https://i.ibb.co/kJkS00p/Whats-App-Image-2023-10-25-at-17-34-55.jpg", true, 24),
                                            ("https://i.ibb.co/x2wNG4Z/Whats-App-Image-2023-10-25-at-17-34-55-1.jpg", true, 25),
                                            ("https://i.ibb.co/r08mvpr/Whats-App-Image-2023-10-25-at-17-34-56-1.jpg", true, 26),
                                            ("https://i.ibb.co/3dY3zqv/Whats-App-Image-2023-10-25-at-17-34-57.jpg", true, 27),
                                            ("https://i.ibb.co/rfVJz1S/Whats-App-Image-2023-10-25-at-17-34-57-1.jpg", true, 28),
                                            ("https://i.ibb.co/g7NZKCr/Whats-App-Image-2023-10-25-at-17-34-57-2.jpg", true, 29),
                                            ("https://i.ibb.co/8PnhJLf/Whats-App-Image-2023-10-25-at-17-34-57-3.jpg", true, 30),
                                            ("https://i.ibb.co/TYrZWsG/Whats-App-Image-2023-10-25-at-17-34-58.jpg", true, 31),
                                            ("https://i.ibb.co/zFm7tfd/Whats-App-Image-2023-10-25-at-17-34-58-1.jpg", true, 32),
                                            ("https://i.ibb.co/5BrSzd9/Whats-App-Image-2023-10-25-at-17-34-58-2.jpg", true, 33),
                                            ("https://i.ibb.co/rmCM4bR/Whats-App-Image-2023-10-25-at-17-34-59-1.jpg", true, 34),
                                            ("https://i.ibb.co/sJtvK8r/Whats-App-Image-2023-10-25-at-17-34-59.jpg", true, 35);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
