import { Module } from '@nestjs/common';
import {DepositService} from './deposit.service';
@Module({
    providers: [DepositService],
    exports: [DepositService],
})
export class DepositModule {}
