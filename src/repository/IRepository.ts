import { IDestination, ITransfer } from '../contract';

export default interface IRepository {
    resetDatabase() :boolean;
    getBalanceByAccountNum(accountNum :string) :number;
    createAccount(accountNum: string, balance: number) :IDestination;
    withdraw(accountNum: string, amount: number) :IDestination;
    transferAmount(accountNumFrom: string, accountNumTo:string, amount: number)  :ITransfer;
}