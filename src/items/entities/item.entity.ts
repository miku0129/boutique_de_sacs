import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item_img_url } from '../../item_img_urls/entities/item_img_url.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  item_id_number: string;

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  desc_1: string;

  @Column('varchar', { nullable: true })
  desc_2: string;

  @Column('varchar')
  category: Sacs | Vannerie | Other;

  @Column('int')
  price: number;

  @Column('boolean')
  is_available: boolean;

  @OneToMany(() => Item_img_url, (item_img_url) => item_img_url.item, {
    cascade: true,
  })
  item_img_urls: Item_img_url[];
}
