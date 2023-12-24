import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemImgUrlsService } from './item_img_urls.service';
import { CreateItemImgUrlDto } from './dto/create-item_img_url.dto';
import { UpdateItemImgUrlDto } from './dto/update-item_img_url.dto';

@Controller('item-img-urls')
export class ItemImgUrlsController {
  constructor(private readonly itemImgUrlsService: ItemImgUrlsService) {}

  @Post()
  create(@Body() createItemImgUrlDto: CreateItemImgUrlDto) {
    return this.itemImgUrlsService.create(createItemImgUrlDto);
  }

  @Get()
  findAll() {
    return this.itemImgUrlsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemImgUrlsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemImgUrlDto: UpdateItemImgUrlDto) {
    return this.itemImgUrlsService.update(+id, updateItemImgUrlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemImgUrlsService.remove(+id);
  }
}
