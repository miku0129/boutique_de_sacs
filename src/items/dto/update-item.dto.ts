import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { Item_img_url } from 'src/item_img_urls/entities/item_img_url.entity';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  item_id_number: string;
  name: string;
  desc_1?: string;
  desc_2?: string;
  category: Category;
  price: number;
  is_available: boolean;
  item_img_urls?: Item_img_url[];
}
