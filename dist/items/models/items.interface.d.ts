import { OrdersInterface } from '../../orders/models/orders.interface';
export interface ItemsInterface {
    id?: number;
    name?: string;
    price?: number;
    createdAt?: Date;
    order?: OrdersInterface;
}
