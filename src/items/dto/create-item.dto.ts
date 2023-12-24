import { Item_img_url } from 'src/item_img_urls/entities/item_img_url.entity';

export class CreateItemDto {
  name: string;
  desc?: string;
  category: string;
  price: number;
  payment_link: string;
  item_img_urls?: Item_img_url[];
}
