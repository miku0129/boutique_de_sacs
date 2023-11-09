import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Item_img_url {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  item_img_url: string;

  @Column()
  is_main_img: boolean;

  @ManyToOne(() => Item, (item) => item.item_img_urls)
  item: Item;
}
