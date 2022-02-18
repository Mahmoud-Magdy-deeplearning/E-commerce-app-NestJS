import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { OrdersEntity } from '../../orders/models/orders.model';

@Entity('itemsEntity')
export class ItemsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ nullable: false, type: 'float', default: 0.0 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => OrdersEntity, (orderEntity) => orderEntity.items)
  order: OrdersEntity;
}
