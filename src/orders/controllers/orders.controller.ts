import {
  Body,
  Controller,
  Request,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { JwtGuard } from '../../auth/guards/jwt.guard';
import { OrdersInterface } from '../models/orders.interface';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  // Create order if you are a user
  @UseGuards(JwtGuard)
  @Post()
  create(
    @Body() order: OrdersInterface,
    @Request() req,
  ): Observable<OrdersInterface> {
    return this.orderService.createOrder(req.user, order);
  }

  @UseGuards(JwtGuard)
  @Get()
  findAll(@Request() req): any {
    return this.orderService.findAllOrders(req.user);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() order: OrdersInterface,
  ): Observable<UpdateResult> {
    return this.orderService.updateOrder(id, order);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.orderService.deleteOrder(id);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Observable<OrdersInterface> {
    return this.orderService.findOrderById(id);
  }
}
