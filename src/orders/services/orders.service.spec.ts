import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

const httpMocks = require('node-mocks-http');

import { User } from '../../auth/models/user.interface';
import { ItemsInterface } from '../../items/models/items.interface';
import { OrdersService } from './orders.service';
import { OrdersInterface } from '../models/orders.interface';
import { OrdersEntity } from '../models/orders.model';

describe('OrdersService', () => {
  let order: OrdersService;

  const mockRequest = httpMocks.createRequest();
  mockRequest.user = new User();
  mockRequest.user.firstName = 'Jon';

  const mockitems: OrdersInterface = {
    totalPrice: 800,
    createdAt: new Date(),
    author: mockRequest.user,
    items: [
      {
        id: 1,
      },
    ],
  };

  const mockOrdersRepository = {
    createOrder: jest
      .fn()
      .mockImplementation((user: User, order: OrdersInterface) => {
        return {
          ...order,
        };
      }),
    save: jest
      .fn()
      .mockImplementation((order: OrdersInterface) =>
        Promise.resolve({ id: 1, order }),
      ),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: getRepositoryToken(OrdersEntity),
          useValue: mockOrdersRepository,
        },
      ],
    }).compile();

    order = moduleRef.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(order).toBeDefined();
  });

  it('should create an Item', (done: jest.DoneCallback) => {
    order
      .createOrder(mockRequest.user, mockitems)
      .subscribe((order: OrdersInterface) => {
        expect(order).toEqual({
          id: expect.any(Number),
          mockitems,
        });
        done();
      });
  });
});
