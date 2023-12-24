import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ItemImgUrlsModule } from './item_img_urls/item_img_urls.module';

@Module({
  imports: [ItemsModule, ItemImgUrlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
