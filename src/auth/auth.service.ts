import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(accountnumber: string, pin: number): Promise<any> {
        const user = await this.usersService.findOne(accountnumber);
        if (user && user.pin === pin) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { accountnumber: user.accountnumber, max: 9999, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
