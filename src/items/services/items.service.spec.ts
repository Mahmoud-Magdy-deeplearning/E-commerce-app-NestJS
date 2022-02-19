import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

const httpMocks = require('node-mocks-http');


import { ItemsService } from './items.service';
import { ItemsInterface } from '../models/items.interface';
import { ItemsEntity } from '../models/items.model';

describe('ItemsService', () => {
  let item: ItemsService;

  const mockRequest = httpMocks.createRequest();

  const mockitems: ItemsInterface = {
    name: 'bike',
    createdAt: new Date(),
    price: 90,
  };

  const mockItemsRepository = {
    createItem: jest.fn().mockImplementation((item: ItemsInterface) => {
      return {
        ...item,
      };
    }),
    save: jest
      .fn()
      .mockImplementation((item: ItemsInterface) =>
        Promise.resolve({ id: 1, item }),
      ),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(ItemsEntity),
          useValue: mockItemsRepository,
        },
      ],
    }).compile();

    item = moduleRef.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(item).toBeDefined();
  });

  it('should create an Item', (done: jest.DoneCallback) => {
    item.createItem(mockitems).subscribe((item: ItemsInterface) => {
      expect(item).toEqual({
        id: expect.any(Number),
        mockitems,
      });
      done();
    });
  });
});
