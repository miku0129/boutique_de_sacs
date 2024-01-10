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
    remove: jest.fn().mockImplementation((id) => {
      const item = items.find((item) => item.id === id);
      items = items.filter((user) => user.id !== id);
      return item;
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

  describe('create', () => {
    it('should create a new item(sacs) with desc and return that', async () => {
      const newItem = await service.create({
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'sacs',
        price: 100,
        is_available: true,
      });
      expect(newItem).toEqual({
        id: expect.any(Number),
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'sacs',
        price: 100,
        is_available: true,
      });
    });
    it('should create a new item(vannerie) with desc and return that', async () => {
      const newItem = await service.create({
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'vannerie',
        price: 100,
        is_available: true,
      });
      expect(newItem).toEqual({
        id: expect.any(Number),
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'vannerie',
        price: 100,
        is_available: true,
      });
    });
    it('should create a new item(autre) with desc and return that', async () => {
      const newItem = await service.create({
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });
      expect(newItem).toEqual({
        id: expect.any(Number),
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });
    });

    it('should create a new item without desc and return that', async () => {
      const newItem = await service.create({
        item_id_number: '777',
        name: 'sample',
        category: 'autre',
        price: 100,
        is_available: true,
      });
      expect(newItem).toEqual({
        id: expect.any(Number),
        item_id_number: '777',
        name: 'sample',
        category: 'autre',
        price: 100,
        is_available: true,
      });
    });
  });

  describe('findAll', () => {
    it('should return all items', async () => {
      await service.create({
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });
      await service.create({
        item_id_number: '778',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });

      expect((await service.findAll()).length).toBe(2);
    });
  });

  describe('findOne', () => {
    it('should return a item by id', async () => {
      const item1 = await service.create({
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });
      const item2 = await service.create({
        item_id_number: '778',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });

      const foundItem = await service.findOne(item1.id);
      expect(foundItem).toEqual({
        id: expect.any(Number),
        item_id_number: '777',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });
    });
  });

  describe('updateItem', () => {
    it('should update a item which have description', async () => {
      const item1 = await service.create({
        item_id_number: '778',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });
      const updatedinfo = {
        ...item1,
        price: 600,
      };
      const updatedItem1 = await service.update(item1.id, updatedinfo);
      expect(updatedItem1).toEqual({
        id: expect.any(Number),
        item_id_number: '778',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 600,
        is_available: true,
      });
    });

    it('should update a item which doesnt have description', async () => {
      const item1 = await service.create({
        item_id_number: '778',
        name: 'sample',
        category: 'autre',
        price: 100,
        is_available: true,
      });
      const updatedinfo = {
        ...item1,
        price: 600,
      };
      const updatedItem1 = await service.update(item1.id, updatedinfo);
      expect(updatedItem1).toEqual({
        id: expect.any(Number),
        item_id_number: '778',
        name: 'sample',
        category: 'autre',
        price: 600,
        is_available: true,
      });
    });
  });

  describe('removeItem', () => {
    it('should remove a item', async () => {
      const item1 = await service.create({
        item_id_number: '778',
        name: 'sample',
        desc_1: 'This is sample item',
        category: 'autre',
        price: 100,
        is_available: true,
      });

      expect(await service.remove(item1.id)).toEqual(item1);
    });
  });
});
