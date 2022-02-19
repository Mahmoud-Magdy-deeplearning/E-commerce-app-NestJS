import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findUserById(userStringId: string): Observable<User>;
}
