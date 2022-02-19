import { UserEntity } from '../../auth/models/user.model';
import { ItemsEntity } from '../../items/models/items.model';
export declare class OrdersEntity {
    id: number;
    name: string;
    totalPrice: number;
    createdAt: Date;
    items: ItemsEntity[];
    author: UserEntity;
}
