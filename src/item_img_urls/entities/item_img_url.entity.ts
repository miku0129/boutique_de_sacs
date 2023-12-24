import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class Item_img_url {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  url: string;

  @Column('boolean')
  is_main: boolean;

  @ManyToOne(() => Item, (item) => item.item_img_urls, { eager: true })
  @JoinColumn()
  item: Item;
}
