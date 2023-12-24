import { Injectable } from '@nestjs/common';
import { CreateItemImgUrlDto } from './dto/create-item_img_url.dto';
import { UpdateItemImgUrlDto } from './dto/update-item_img_url.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item_img_url } from './entities/item_img_url.entity';

@Injectable()
export class ItemImgUrlsService {
  constructor(
    @InjectRepository(Item_img_url)
    private itemImgUrlRepository: Repository<Item_img_url>,
  ) {}
  create(createItemImgUrlDto: CreateItemImgUrlDto): Promise<Item_img_url> {
    const newItemImgUrl = this.itemImgUrlRepository.create(createItemImgUrlDto);
    return this.itemImgUrlRepository.save(newItemImgUrl);
  }

  findAll(): Promise<Item_img_url[]> {
    return this.itemImgUrlRepository.find();
  }

  async findOne(id: number): Promise<Item_img_url> {
    try {
      const item_img_url = await this.itemImgUrlRepository.findOneOrFail({
        where: { id: id },
      });
      return item_img_url;
    } catch (err) {
      throw err;
    }
  }

  async update(
    id: number,
    updateItemImgUrlDto: UpdateItemImgUrlDto,
  ): Promise<Item_img_url> {
    let item_img_url = await this.itemImgUrlRepository.findOneOrFail({
      where: { id: id },
    });
    item_img_url = { ...item_img_url, ...updateItemImgUrlDto };
    return this.itemImgUrlRepository.save(item_img_url);
  }

  async remove(id: number): Promise<Item_img_url> {
    const item_img_url = await this.itemImgUrlRepository.findOneOrFail({
      where: { id: id },
    });
    this.itemImgUrlRepository.remove(item_img_url);
    return item_img_url;
  }
}
