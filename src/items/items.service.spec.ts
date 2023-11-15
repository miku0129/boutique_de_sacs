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
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        { provide: getRepositoryToken(Item), useValue: mockItemRepository },
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
      const newItem = await service.createItem({
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
});
