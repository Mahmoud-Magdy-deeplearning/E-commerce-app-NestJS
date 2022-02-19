import { Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { OrdersEntity } from '../models/orders.model';
import { OrdersInterface } from '../models/orders.interface';
import { User } from '../../auth/models/user.interface';
export declare class OrdersService {
    private readonly OrdersRepository;
    constructor(OrdersRepository: Repository<OrdersEntity>);
    createOrder(user: User, order: OrdersInterface): Observable<OrdersInterface>;
    findAllOrders(user: User): any;
    updateOrder(id: number, order: OrdersInterface): Observable<UpdateResult>;
    deleteOrder(id: number): Observable<DeleteResult>;
    findOrderById(id: number): Observable<OrdersInterface>;
}
