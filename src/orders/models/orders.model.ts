import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from '../../auth/models/user.model';
import { ItemsEntity } from '../../items/models/items.model';

@Entity('OrdersEntity')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ nullable: false, type: 'float', default: 0.0 })
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => ItemsEntity, (itemsEntity) => itemsEntity.order)
  items: ItemsEntity[];

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.orders)
  author: UserEntity;
}