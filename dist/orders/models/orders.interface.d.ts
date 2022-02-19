import { ItemsInterface } from '../../items/models/items.interface';
import { User } from '../../auth/models/user.interface';
export interface OrdersInterface {
    id?: number;
    author?: User;
    totalPrice?: number;
    createdAt?: Date;
    items?: ItemsInterface[];
}
