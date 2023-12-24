import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item_img_url } from '../../item_img_urls/entities/item_img_url.entity';

// type Sac = string;
// type Panier = string;
// type Other = string;

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  desc: string;

  @Column('varchar')
  category: Sac | Panier | Other;

  @Column('int')
  price: number;

  @Column('varchar', { nullable: true })
  payment_link: string;

  @OneToMany(() => Item_img_url, (item_img_url) => item_img_url.item, {
    cascade: true,
  })
  item_img_urls: Item_img_url[];
}
