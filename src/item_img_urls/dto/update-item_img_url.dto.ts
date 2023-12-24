import { PartialType } from '@nestjs/mapped-types';
import { CreateItemImgUrlDto } from './create-item_img_url.dto';

export class UpdateItemImgUrlDto extends PartialType(CreateItemImgUrlDto) {
  url: string;
  is_main: boolean;
}
