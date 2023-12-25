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

  const update_dto = {
    ...create_dto,
    url: 'updated item_img_url',
    is_main: false,
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
    findAll: jest.fn(() => item_img_urls),
    findOne: jest.fn().mockImplementation((id) => {
      return item_img_urls.find((url) => url.id === id);
    }),
    update: jest.fn().mockImplementation((id, update_dto) => {
      const foundUrl = item_img_urls.find((url) => url.id === id);
      return { ...foundUrl, ...update_dto };
    }),
    remove: jest.fn().mockImplementation((id) => {
      const item = item_img_urls.find((item) => item.id === id);
      item_img_urls = item_img_urls.filter((user) => user.id !== id);
      return item;
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

  describe('findAll', () => {
    it('should get all item_img_url', async () => {
      controller.create(create_dto);
      controller.create(create_dto);
      controller.create(create_dto);

      const result = await controller.findAll();
      expect(result.length).toBe(3);
    });
  });

  describe('findOne', () => {
    it('should find a item_img_url by id', async () => {
      const item1 = await controller.create(create_dto);

      const result = await controller.findOne(String(item1.id));
      expect(result.url).toEqual(item1.url);
    });
  });

  describe('update', () => {
    it('should update a item_img_url by id', async () => {
      const item1 = await controller.create(create_dto);
      const updated_item = await controller.update(
        String(item1.id),
        update_dto,
      );

      expect(updated_item).toEqual({
        id: expect.any(Number),
        url: 'updated item_img_url',
        is_main: false,
      });
    });
  });

  describe('remove', () => {
    it('should remove a item_img_url by id', async () => {
      const item1 = await controller.create(create_dto);
      const removedItem = await controller.remove(String(item1.id));
      expect(removedItem.id).toEqual(item1.id);
    });
  });
});
