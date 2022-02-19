import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { ItemsInterface } from '.././models/items.interface';

class ApiServiceMock {
  createItem(dto: ItemsInterface) {
    return [];
  }
  findItemById(id: number) {
    return {};
  }
  findAllItems() {
    return [];
  }
  deleteItem(id: number) {
    return null;
  }

}
describe.only('ItemsService', () => {
  let itemService: ItemsService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ItemsService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsService, ApiServiceProvider],
    }).compile();
    itemService = module.get<ItemsService>(ItemsService);
  });

  it('should call  createItem with expected params', async () => {
    const createItemSpy = jest.spyOn(itemService, 'createItem');
    const dto = {
      name: 'ship',
      price: 90,
    };
    itemService.createItem(dto);
    expect(createItemSpy).toHaveBeenCalledWith(dto);
  });

  it('should call findItemById method with expected param', async () => {
    const findItemByIdSpy = jest.spyOn(itemService, 'findItemById');
    const itemId = 2;
    itemService.findItemById(itemId);
    expect(findItemByIdSpy).toHaveBeenCalledWith(itemId);
  });

  it('should call findAllItems method with expected params', async () => {
    const findAllItemsSpy = jest.spyOn(itemService, 'findAllItems');
    itemService.findAllItems();
    expect(findAllItemsSpy).toHaveBeenCalledWith();
  });

  it('should call deletItem method with expected param', async () => {
    const deleteItemSpy = jest.spyOn(itemService, 'deleteItem');
    const itemId = 1;
    itemService.deleteItem(itemId);
    expect(deleteItemSpy).toHaveBeenCalledWith(itemId);
  });
});