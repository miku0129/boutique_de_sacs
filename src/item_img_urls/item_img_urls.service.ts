import { Injectable } from '@nestjs/common';
import { CreateItemImgUrlDto } from './dto/create-item_img_url.dto';
import { UpdateItemImgUrlDto } from './dto/update-item_img_url.dto';

@Injectable()
export class ItemImgUrlsService {
  create(createItemImgUrlDto: CreateItemImgUrlDto) {
    return 'This action adds a new itemImgUrl';
  }

  findAll() {
    return `This action returns all itemImgUrls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemImgUrl`;
  }

  update(id: number, updateItemImgUrlDto: UpdateItemImgUrlDto) {
    return `This action updates a #${id} itemImgUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemImgUrl`;
  }
}
