import { Injectable } from '@nestjs/common';

export type User = any;
const randomize = require('randomatic');

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                civility: 'monsieur',
                firstname: 'aymeric',
                lastname: 'barthe',
                birthday: '2019-12-18',
                adress: '123 Sesame street',
                accountnumber: '1243225434543',
                pin: 12432413,
                amount: 1000,
            },
            {
                userId: 2,
                civility: 'monsieur',
                firstname: 'aymeric',
                lastname: 'barthe',
                birthday: '2019-12-18',
                adress: '123 Sesame street',
                accountnumber: '1243432225434543',
                pin: 12432413423,
                amount: 0,
            },
            {
                userId: 3,
                civility: 'monsieur',
                firstname: 'aymeric',
                lastname: 'barthe',
                birthday: '2019-12-18',
                adress: '123 Sesame street',
                accountnumber: '12432233525434543',
                pin: 12432412353,
                amount: 0,
            },
        ];
    }

    async findOne(accountnumber: string): Promise<User | undefined> {
        return this.users.find(account => account.accountnumber === accountnumber);
    }

    async create(user: User): Promise<User | undefined> {
        user.accountnumber = '18121' + randomize('0', 7) + randomize('A', 1);
        user.pin = randomize('0', 6);
        return this.users.push(user);
    }
}
