import { Injectable } from '@nestjs/common';
import {User} from '../users/users.service';

export type Deposit = any;

@Injectable()
export class DepositService {
    private readonly deposit: Deposit[];

    constructor() {
        this.deposit = [
            {
                Id: 1,
                accountnumber: '1243225434543',
                date: '2019-10-09',
                amount: 100,
            },
        ];
    }
    async create(deposit: Deposit): Promise<Deposit> {

        return this.deposit.push(deposit);
    }
}
