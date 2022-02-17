import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

// import { User } from '../../auth/models/user.interface';
import { OrdersEntity } from '../models/orders.model';
import { OrdersInterface } from '../models/orders.interface';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly OrdersRepository: Repository<OrdersEntity>,
  ) {}

  createorder(order: OrdersInterface): Observable<OrdersInterface> {
    const { name, price } = order;
    return from(this.OrdersRepository.save({ name, price }));
  }

  findAllorders(): Observable<OrdersInterface[]> {
    return from(this.OrdersRepository.find());
  }

  updateorder(id: number, order: OrdersInterface): Observable<UpdateResult> {
    return from(this.OrdersRepository.update(id, order));
  }

  deleteorder(id: number): Observable<DeleteResult> {
    return from(this.OrdersRepository.delete(id));
  }

  findorderById(id: number): Observable<OrdersInterface> {
    return from(this.OrdersRepository.findOne({ id }));
  }
}
