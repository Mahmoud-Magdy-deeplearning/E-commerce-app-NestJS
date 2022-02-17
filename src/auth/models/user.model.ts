import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// import { OrdersEntity } from '../../orders/models/orders.model';
import { Role } from './roles.enum';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  // @OneToMany(() => OrdersEntity, (OrdersEntity) => OrdersEntity.author)
  // Orders: OrdersEntity[];

}