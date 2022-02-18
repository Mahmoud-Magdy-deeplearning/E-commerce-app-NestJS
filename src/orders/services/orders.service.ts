import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { OrdersEntity } from '../models/orders.model';
import { OrdersInterface } from '../models/orders.interface';
import { User } from '../../auth/models/user.interface';
import { Role } from '../../auth/models/roles.enum';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly OrdersRepository: Repository<OrdersEntity>,
  ) {}
  createOrder(user: User, order: OrdersInterface): Observable<OrdersInterface> {
    order.author = user;
    //save Order to Database
    return from(this.OrdersRepository.save(order));
  }

  findAllOrders(user: User): any {
    if (user.role == Role.ADMIN)
      return from(
        this.OrdersRepository.find({ relations: ['author', 'items'] }),
      );
    else return 'Not allowed';
  }

  updateOrder(id: number, order: OrdersInterface): Observable<UpdateResult> {
    return from(this.OrdersRepository.update(id, order));
  }

  deleteOrder(id: number): Observable<DeleteResult> {
    return from(this.OrdersRepository.delete(id));
  }

  findOrderById(id: number): Observable<OrdersInterface> {
    return from(
      this.OrdersRepository.findOne({ id }, { relations: ['author'] }),
    );
  }
}
