import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item_img_url } from './item_img_url.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  item_name: string;

  @Column()
  item_price: number;

  @Column()
  item_desc: string;

  @OneToMany(() => Item_img_url, (item_img_url) => item_img_url.item)
  item_img_urls: Item_img_url[];
}
