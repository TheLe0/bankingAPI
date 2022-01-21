import { IRepository } from ".";
import { Account } from "../model";

export default class InMemory implements IRepository {

    private listAccount: Array<Account>;

    constructor() {
        this.listAccount = new Array<Account>();
    }

    public getBalanceByAccountNum(accountNum: string): number {
        
        let balance = undefined;

        for (let account of this.listAccount) {   
            if (account.getAccountNum() == accountNum) {
                balance = account.getBalance();
                break;
            }
         }

        return balance;
    }


    public resetDatabase(): boolean {
        this.listAccount = new Array<Account>();

        return true;
    }



}