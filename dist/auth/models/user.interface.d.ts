import { OrdersInterface } from '../../orders/models/orders.interface';
import { Role } from './roles.enum';
export declare class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: Role;
    orders?: OrdersInterface[];
}
