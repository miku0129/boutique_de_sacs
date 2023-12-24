import { Module } from '@nestjs/common';
import { ItemImgUrlsService } from './item_img_urls.service';
import { ItemImgUrlsController } from './item_img_urls.controller';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from '../config/typeorm';
import { Item_img_url } from './entities/item_img_url.entity';
import { Item } from 'src/items/entities/item.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TypeOrmModule.forFeature([Item, Item_img_url]),
  ],
  controllers: [ItemImgUrlsController],
  providers: [ItemImgUrlsService],
})
export class ItemImgUrlsModule {}
