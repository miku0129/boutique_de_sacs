import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let items = [];

  const dto = {
    id: 1,
    item_name: 'sample',
    item_price: 100,
    item_desc: 'This is a sample',
  };
  interface Item {
    id: number;
    item_name: string;
    item_price: number;
    item_desc: string;
  }

  const getUniqueNum = (): number => {
    return Date.now() + Math.random();
  };

  const mockItemService = {
    create: jest.fn((dto): Item => {
      const newItem = {
        id: getUniqueNum(),
        ...dto,
      };
      items.push(newItem);
      return newItem;
    }),
    getAll: jest.fn(() => items),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService],
    })
      .overrideProvider(ItemsService)
      .useValue(mockItemService)
      .compile();

    controller = module.get<ItemsController>(ItemsController);

    items = [];
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a item', async () => {
    expect(await controller.create(dto)).toEqual({
      id: expect.any(Number),
      item_name: dto.item_name,
      item_price: dto.item_price,
      item_desc: dto.item_desc,
    });
  });

  it('should find all items', async () => {
    controller.create(dto);
    controller.create(dto);
    controller.create(dto);

    const result = await controller.getAll();
    expect(result.length).toBe(3);
  });
});
