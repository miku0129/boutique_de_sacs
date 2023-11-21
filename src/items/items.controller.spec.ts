import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let items = [];

  const create_dto = {
    id: 1,
    item_name: 'sample',
    item_price: 100,
    item_desc: 'This is a sample',
  };
  const update_dto = {
    ...create_dto,
    item_name: 'updated dto',
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
    create: jest.fn((create_dto): Item => {
      const newItem = {
        id: getUniqueNum(),
        ...create_dto,
      };
      items.push(newItem);
      return newItem;
    }),
    getAll: jest.fn(() => items),
    findOne: jest.fn().mockImplementation((id) => {
      return items.find((item) => item.id === id);
    }),
    update: jest.fn().mockImplementation((id, update_dto) => {
      const founditem = items.find((item) => item.id === id);
      return { ...founditem, ...update_dto };
    }),
    remove: jest.fn().mockImplementation((id) => {
      const item = items.find((item) => item.id === id);
      items = items.filter((user) => user.id !== id);
      return item;
    }),
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

  describe('create', () => {
    it('should create a item', async () => {
      expect(await controller.create(create_dto)).toEqual({
        id: expect.any(Number),
        item_name: create_dto.item_name,
        item_price: create_dto.item_price,
        item_desc: create_dto.item_desc,
      });
    });
  });

  describe('getAll', () => {
    it('should get all items', async () => {
      controller.create(create_dto);
      controller.create(create_dto);
      controller.create(create_dto);

      const result = await controller.getAll();
      expect(result.length).toBe(3);
    });
  });

  describe('findOne', () => {
    it('should find a item by id', async () => {
      const item1 = await controller.create(create_dto);
      const item2 = await controller.create({ id: 2, ...create_dto });

      const result = await controller.findOne(String(item1.id));
      expect(result.id).toEqual(item1.id);
    });
  });

  describe('update', () => {
    it('should update a item by id', async () => {
      const item1 = await controller.create(create_dto);
      const item2 = await controller.create({ id: 2, ...create_dto });

      const updated_item = await controller.update(
        String(item1.id),
        update_dto,
      );

      expect(updated_item.item_price).toEqual(update_dto.item_price);
    });
  });

  describe('remove', () => {
    it('should remove a item by id', async () => {
      const item1 = await controller.create(create_dto);
      const removedItem = await controller.remove(String(create_dto.id));
      expect(removedItem.id).toEqual(item1.id);
    });
  });
});
