import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

// import { User } from '../../auth/models/user.class';
import { ItemsEntity } from '../models/items.model';
import { ItemsInterface } from '../models/items.interface';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsEntity)
    private readonly ItemsRepository: Repository<ItemsEntity>,
  ) {}

  createItem(item: ItemsInterface, ): Observable<ItemsInterface> {
    const { name, price } = item;
    return from(this.ItemsRepository.save({name, price}));
  }

  findAllItems(): Observable<ItemsInterface[]> {
    return from(this.ItemsRepository.find());
  }

  updateItem(id: number, item: ItemsInterface): Observable<UpdateResult> {
    return from(this.ItemsRepository.update(id, item));
  }

  deleteItem(id: number): Observable<DeleteResult> {
    return from(this.ItemsRepository.delete(id));
  }

  findItemById(id: number): Observable<ItemsInterface> {
    return from(
      this.ItemsRepository.findOne({ id }),
    );
  }
}