import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<import("../users/schemas/user.schema").User>;
}
