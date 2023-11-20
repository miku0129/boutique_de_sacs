import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

describe('ItemsService', () => {
  let service: ItemsService;
  let items = [];

  const mockItemRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((item) => {
      const newItem = { id: Date.now(), ...item };
      items.push(newItem);
      return Promise.resolve(newItem);
    }),
    find: jest.fn().mockImplementation(() => items),
    findOneOrFail: jest.fn().mockImplementation(({ where: { id: id } }) => {
      return items.find((item) => item.id === id);
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(Item),
          useValue: mockItemRepository,
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    items = [];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createItem', () => {
    it('should create a new item record and return that', async () => {
      const newItem = await service.create({
        item_name: 'sample',
        item_price: 100,
        item_desc: 'This is a sample',
      });
      expect(newItem).toEqual({
        id: expect.any(Number),
        item_name: 'sample',
        item_price: 100,
        item_desc: 'This is a sample',
      });
    });
  });

  describe('getAll', () => {
    it('should return all items', async () => {
      await service.create({
        item_name: 'sample1',
        item_price: 100,
        item_desc: 'This is a sample1',
      });
      await service.create({
        item_name: 'sample2',
        item_price: 200,
        item_desc: 'This is a sample2',
      });

      expect((await service.getAll()).length).toBe(2);
    });
  });

  describe('findOne', () => {
    it('should return a item by id', async () => {
      const item1 = await service.create({
        item_name: 'sample1',
        item_price: 100,
        item_desc: 'This is a sample1',
      });
      const item2 = await service.create({
        item_name: 'sample2',
        item_price: 200,
        item_desc: 'This is a sample2',
      });

      const foundItem = await service.findOne(item1.id);
      expect(foundItem).toEqual({
        id: expect.any(Number),
        item_name: 'sample1',
        item_price: 100,
        item_desc: 'This is a sample1',
      });
    });
  });

  describe('updateItem', () => {
    it('should update a item', async () => {
      const item1 = await service.create({
        item_name: 'sample',
        item_price: 100,
        item_desc: 'This is a sample',
      });

      const updatedinfo = {
        ...item1,
        item_price: 600,
        item_img_urls: [],
      };
      const updatedItem1 = await service.update(item1.id, updatedinfo);

      expect(updatedItem1).toEqual({
        id: expect.any(Number),
        item_name: 'sample',
        item_price: 600,
        item_desc: 'This is a sample',
        item_img_urls: [],
      });
    });
  });
});
