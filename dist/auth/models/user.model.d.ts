import { OrdersEntity } from '../../orders/models/orders.model';
import { Role } from './roles.enum';
export declare class UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    orders: OrdersEntity[];
}
