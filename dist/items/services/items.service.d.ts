import { Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ItemsEntity } from '../models/items.model';
import { ItemsInterface } from '../models/items.interface';
export declare class ItemsService {
    private readonly ItemsRepository;
    constructor(ItemsRepository: Repository<ItemsEntity>);
    createItem(item: ItemsInterface): Observable<ItemsInterface>;
    findAllItems(): Observable<ItemsInterface[]>;
    updateItem(id: number, item: ItemsInterface): Observable<UpdateResult>;
    deleteItem(id: number): Observable<DeleteResult>;
    findItemById(id: number): Observable<ItemsInterface>;
}
