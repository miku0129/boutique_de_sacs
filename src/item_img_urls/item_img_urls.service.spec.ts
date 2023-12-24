import { Test, TestingModule } from '@nestjs/testing';
import { ItemImgUrlsService } from './item_img_urls.service';

describe('ItemImgUrlsService', () => {
  let service: ItemImgUrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemImgUrlsService],
    }).compile();

    service = module.get<ItemImgUrlsService>(ItemImgUrlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
