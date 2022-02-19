import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { OrdersInterface } from '.././models/orders.interface';
let httpMocks = require('node-mocks-http');

class ApiServiceMock {
  createOrder(req: any, dto: OrdersInterface) {
    return {};
  }
  findOrderById(id: number) {
    return {};
  }
  findAllOrders() {
    return [];
  }
  deleteOrder(id: number) {
    return null;
  }
}
const req = httpMocks.createRequest();

describe.only('OrdersService', () => {
  let orderService: OrdersService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: OrdersService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService, ApiServiceProvider],
    }).compile();
    orderService = module.get<OrdersService>(OrdersService);
  });

  it('should call  createOrder with expected params', async () => {
    const createOrderSpy = jest.spyOn(orderService, 'createOrder');
    const dto = {
      name: 'Order 2',
      totalPrice: 90,
      items: [{ id: 1 }, { id: 2 }],
    };
    orderService.createOrder(req, dto);
    expect(createOrderSpy).toHaveBeenCalledWith(req, dto);
  });

  it('should call findOrderById method with expected param', async () => {
    const findOneNoteSpy = jest.spyOn(orderService, 'findOrderById');
    const orderId = 2;
    orderService.findOrderById(orderId);
    expect(findOneNoteSpy).toHaveBeenCalledWith(orderId);
  });

  it('should call findAllOrders method with expected params', async () => {
    const findAllItemsSpy = jest.spyOn(orderService, 'findAllOrders');
    orderService.findAllOrders(req);
    expect(findAllItemsSpy).toHaveBeenCalledWith(req);
  });

  it('should call deleteOrder method with expected param', async () => {
    const deleteOrderSpy = jest.spyOn(orderService, 'deleteOrder');
    const orderId = 1;
    orderService.deleteOrder(orderId);
    expect(deleteOrderSpy).toHaveBeenCalledWith(orderId);
  });
});
