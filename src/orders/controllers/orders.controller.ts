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

// import { JwtGuard } from '../../auth/guards/jwt.guard';

import { OrdersInterface } from '../models/orders.interface';
import { OrdersService } from '../services/orders.service';

// import { IsCreatorGuard } from '../guards/is-creator.guard';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  create(@Body() order: OrdersInterface): Observable<OrdersInterface> {
    return this.orderService.createorder(order);
  }

  @Get()
  findAll(): Observable<OrdersInterface[]> {
    return this.orderService.findAllorders();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<OrdersInterface> {
    return this.orderService.findorderById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() order: OrdersInterface,
  ): Observable<UpdateResult> {
    return this.orderService.updateorder(id, order);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.orderService.deleteorder(id);
  }
}
