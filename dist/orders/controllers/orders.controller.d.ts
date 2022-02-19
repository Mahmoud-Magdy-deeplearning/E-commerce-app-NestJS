import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { OrdersInterface } from '../models/orders.interface';
import { OrdersService } from '../services/orders.service';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersService);
    create(order: OrdersInterface, req: any): Observable<OrdersInterface>;
    findAll(req: any): any;
    update(id: number, order: OrdersInterface): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
    findOne(id: number): Observable<OrdersInterface>;
}
