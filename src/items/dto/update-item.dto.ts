import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { Item_img_url } from '../entities/item_img_url.entity';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  id: number;
  item_name: string;
  item_price: number;
  item_desc: string;
  item_img_urls?: Item_img_url[];
}
