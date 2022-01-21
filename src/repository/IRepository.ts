import { IDestination } from '../contract';

export default interface IRepository {
    resetDatabase() :boolean;
    getBalanceByAccountNum(accountNum :string) :number;
    createAccount(accountNum: string, balance: number) :IDestination;
}