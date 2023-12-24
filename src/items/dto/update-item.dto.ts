import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { Item_img_url } from 'src/item_img_urls/entities/item_img_url.entity';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  id: number;
  name: string;
  desc?: string;
  category: string;
  price: number;
  payment_link: string;
  item_img_urls?: Item_img_url[];
}
