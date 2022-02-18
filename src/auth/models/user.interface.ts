import { IsEmail, IsString } from 'class-validator';
import { OrdersInterface } from '../../orders/models/orders.interface';
import { Role } from './roles.enum';

export class User {
  id?: number;
  firstName?: string;
  lastName?: string;
  @IsEmail()
  email?: string;
  @IsString()
  password?: string;
  role?: Role;
  orders?: OrdersInterface[];
}