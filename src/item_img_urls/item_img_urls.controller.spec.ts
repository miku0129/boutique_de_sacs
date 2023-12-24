import { Test, TestingModule } from '@nestjs/testing';
import { ItemImgUrlsController } from './item_img_urls.controller';
import { ItemImgUrlsService } from './item_img_urls.service';

describe('ItemImgUrlsController', () => {
  let controller: ItemImgUrlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemImgUrlsController],
      providers: [ItemImgUrlsService],
    }).compile();

    controller = module.get<ItemImgUrlsController>(ItemImgUrlsController);
  });

  xit('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
