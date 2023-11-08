import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  product_name: string;

  @Column()
  product_price: number;

  @Column()
  product_desc: string;

  @Column()
  product_img_url: string;
}
