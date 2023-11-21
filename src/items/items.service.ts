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

  create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(newItem);
  }

  getAll(): Promise<Item[]> {
    return this.itemRepository.find({ relations: ['item_img_urls'] });
  }

  async findOne(id: number): Promise<Item> {
    try {
      const item = await this.itemRepository.findOneOrFail({
        where: { id: id },
        relations: ['item_img_urls'],
      });
      return item;
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    let item = await this.itemRepository.findOneOrFail({
      where: { id: id },
      relations: ['item_img_urls'],
    });
    item = { ...item, ...updateItemDto };
    return this.itemRepository.save(item);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} item`;
  // }
}
