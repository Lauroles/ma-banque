import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import {UsersService} from './users/users.service';
import {jwtConstants} from './auth/constant';
import {DepositService} from './deposit/deposit.service';

const jwt = require('jsonwebtoken');

@Controller()
export class AppController {
constructor(private readonly authService: AuthService, private readonly  usersService: UsersService,
            private readonly depositService: DepositService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Post('create/user')
  async create(@Request() req) {
    return this.usersService.create(req.body);
  }

  @Post('create/deposit')
  async createDeposit(@Request() req) {
  const token = req.headers['access_token'];

  var decoded = jwt.verify(token, jwtConstants.secret);
  this.depositService.create(req.body);

  if (req.body['amount'] <= decoded['max'] && this.usersService.findOne(decoded['accountNumber'])) {
    if (req.body['amount'] < 0) {
     if (req.body['amount'] + this.usersService.findOne(decoded['accountNumber'])['amount'] > 0) {
          return 'success';
      }
    }
    return 'error';
  }
}
}
