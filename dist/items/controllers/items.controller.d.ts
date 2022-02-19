import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ItemsInterface } from '../models/items.interface';
import { ItemsService } from '../services/items.service';
export declare class ItemsController {
    private itemService;
    constructor(itemService: ItemsService);
    create(item: ItemsInterface): Observable<ItemsInterface>;
    findAll(): Observable<ItemsInterface[]>;
    findOne(id: number): Observable<ItemsInterface>;
    update(id: number, item: ItemsInterface): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
