import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let items = [];

  interface Item {
    id: number;
    item_id_number: string;
    name: string;
    desc_1: string;
    desc_2: string;
    category: Category;
    price: number;
    is_available: boolean;
  }

  const create_category: Sacs = 'sacs';
  const create_dto = {
    id: 1,
    item_id_number: '777',
    name: 'sample',
    desc_1: 'This is sample item',
    category: create_category,
    price: 100,
    is_available: true,
  };

  const updated_category: Vannerie = 'vannerie';
  const update_dto = {
    ...create_dto,
    item_id_number: '778',
    name: 'updated name',
    desc_1: 'This is updated sample',
    category: updated_category,
    price: 150,
    is_available: false,
  };

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
    findAll: jest.fn(() => items),
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
        item_id_number: create_dto.item_id_number,
        name: create_dto.name,
        desc_1: create_dto.desc_1,
        category: create_dto.category,
        price: create_dto.price,
        is_available: create_dto.is_available,
      });
    });
  });

  describe('findAll', () => {
    it('should get all items', async () => {
      controller.create(create_dto);
      controller.create(create_dto);
      controller.create(create_dto);

      const result = await controller.findAll();
      expect(result.length).toBe(3);
    });
  });

  describe('findOne', () => {
    it('should find a item by id', async () => {
      const item1 = await controller.create(create_dto);

      const result = await controller.findOne(String(item1.id));
      expect(result.desc_1).toBe('This is sample item');
    });
  });

  describe('update', () => {
    it('should update name of a item', async () => {
      const item1 = await controller.create(create_dto);

      const updated_item = await controller.update(
        String(item1.id),
        update_dto,
      );

      expect(updated_item).toEqual({
        id: expect.any(Number),
        item_id_number: '778',
        name: 'updated name',
        desc_1: 'This is updated sample',
        category: updated_category,
        price: 150,
        is_available: false,
      });
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
