import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { JwtGuard } from '../guards/jwt.guard';
import { User } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(':userId')
  findUserById(@Param('userId') userStringId: string): Observable<User> {
    const userId = parseInt(userStringId);
    return this.userService.findUserById(userId);
  }
}
