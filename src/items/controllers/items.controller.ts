import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

import { ItemsInterface } from '../models/items.interface';
import { ItemsService } from '../services/items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Post()
  create(@Body() item: ItemsInterface): Observable<ItemsInterface> {
    return this.itemService.createItem(item);
  }

  @Get()
  findAll(): Observable<ItemsInterface[]> {
    return this.itemService.findAllItems();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<ItemsInterface> {
    return this.itemService.findItemById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() item: ItemsInterface,
  ): Observable<UpdateResult> {
    return this.itemService.updateItem(id, item);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.itemService.deleteItem(id);
  }
}
