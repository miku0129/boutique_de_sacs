import { Test, TestingModule } from '@nestjs/testing';
import { ItemImgUrlsController } from './item_img_urls.controller';
import { ItemImgUrlsService } from './item_img_urls.service';

describe('ItemImgUrlsController', () => {
  let controller: ItemImgUrlsController;
  let item_img_urls = [];

  const create_dto = {
    url: 'item_img_url',
    is_main: true,
  };

  interface Item_img_url {
    id: number;
    url: string;
    is_main: boolean;
  }
  const getUniqueNum = (): number => {
    return Date.now() + Math.random();
  };

  const mockItemImgUrlService = {
    create: jest.fn((create_dto): Item_img_url => {
      const newItemImgUrl = {
        id: getUniqueNum(),
        ...create_dto,
      };
      item_img_urls.push(newItemImgUrl);
      return newItemImgUrl;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemImgUrlsController],
      providers: [ItemImgUrlsService],
    })
      .overrideProvider(ItemImgUrlsService)
      .useValue(mockItemImgUrlService)
      .compile();

    controller = module.get<ItemImgUrlsController>(ItemImgUrlsController);
    item_img_urls = [];
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a item_img_url', async () => {
      expect(await controller.create(create_dto)).toEqual({
        id: expect.any(Number),
        url: 'item_img_url',
        is_main: true,
      });
    });
  });
});
