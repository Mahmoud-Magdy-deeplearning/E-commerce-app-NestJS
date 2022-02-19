import { OrdersEntity } from '../../orders/models/orders.model';
export declare class ItemsEntity {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    order: OrdersEntity;
}
