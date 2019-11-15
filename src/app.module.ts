import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DepositService } from './deposit/deposit.service';
import { DepositModule } from './deposit/deposit.module';

@Module({
  imports: [AuthModule, UsersModule, DepositModule],
  controllers: [AppController],
  providers: [AppService, DepositService],
})
export class AppModule {}
