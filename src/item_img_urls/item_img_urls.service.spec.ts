import { Test, TestingModule } from '@nestjs/testing';
import { ItemImgUrlsService } from './item_img_urls.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item_img_url } from './entities/item_img_url.entity';

describe('ItemImgUrlsService', () => {
  let service: ItemImgUrlsService;
  let item_img_urls = [];

  const mockItemImgUrlsRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((url) => {
      const newItemImgUrl = {
        id: 1,
        ...url,
      };
      item_img_urls.push(newItemImgUrl);
      return Promise.resolve(newItemImgUrl);
    }),
    find: jest.fn().mockImplementation(() => item_img_urls),
    findOneOrFail: jest.fn().mockImplementation(({ where: { id: id } }) => {
      return item_img_urls.find((url) => url.id === id);
    }),
    remove: jest.fn().mockImplementation((id) => {
      const item_img_url = item_img_urls.find((url) => url.id === id);
      item_img_urls = item_img_urls.filter((user) => user.id !== id);
      return item_img_url;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemImgUrlsService,
        {
          provide: getRepositoryToken(Item_img_url),
          useValue: mockItemImgUrlsRepository,
        },
      ],
    }).compile();

    service = module.get<ItemImgUrlsService>(ItemImgUrlsService);
    item_img_urls = [];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new item_img_url record and return that', async () => {
      const newItemImgUrl = await service.create({
        url: 'test-img-url',
        is_main: true,
      });
      expect(newItemImgUrl).toEqual({
        id: expect.any(Number),
        url: 'test-img-url',
        is_main: true,
      });
    });
  });

  describe('findAll', () => {
    it('should return all item_img_url', async () => {
      await service.create({
        url: 'test-img-url',
        is_main: true,
      });
      await service.create({
        url: 'test-img-url',
        is_main: true,
      });
      expect((await service.findAll()).length).toBe(2);
    });
  });

  describe('findOne', () => {
    it('should return a item_img_url by id', async () => {
      const item_img_url1 = await service.create({
        url: 'test-img-url',
        is_main: true,
      });
      const item_img_url2 = await service.create({
        url: 'test-img-url',
        is_main: false,
      });
      const foundItem = await service.findOne(item_img_url1.id);
      expect(foundItem).toEqual({
        id: expect.any(Number),
        url: 'test-img-url',
        is_main: true,
      });
    });
  });

  describe('update', () => {
    it('should update item_img_url', async () => {
      const item_img_url = await service.create({
        url: 'test-img-url',
        is_main: true,
      });
      const updatedinfo = {
        ...item_img_url,
        is_main: false,
      };
      const updatedItemImgUrl = await service.update(
        item_img_url.id,
        updatedinfo,
      );
      expect(updatedItemImgUrl).toEqual({
        id: expect.any(Number),
        url: 'test-img-url',
        is_main: false,
      });
    });
  });

  describe('remove', () => {
    it('should remove a item_img_url', async () => {
      const item_img_url = await service.create({
        url: 'test-img-url',
        is_main: true,
      });
      expect(await service.remove(item_img_url.id)).toEqual(item_img_url);
    });
  });
});
