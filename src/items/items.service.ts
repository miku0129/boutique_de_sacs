import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  createItem(item_name: string, item_price: number, item_desc: string) {
    const newItem = this.itemRepository.create({
      item_name,
      item_price,
      item_desc,
    });
    return this.itemRepository.save(newItem);
  }

  getAll(): Promise<Item[]> {
    return this.itemRepository.find({ relations: ['item_img_urls'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
