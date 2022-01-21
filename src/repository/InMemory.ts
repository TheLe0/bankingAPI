import { IRepository } from ".";
import { IDestination } from "../contract";
import { Account } from "../model";

export default class InMemory implements IRepository {

    private listAccount: Array<Account>;

    constructor() {
        this.listAccount = new Array<Account>();
    }

    private findAccountByAccountNum(accountNum: string) :Account {

        let account :Account = undefined;

        for (let element of this.listAccount) {   
            if (element.getAccountNum() == accountNum) {
                account = element;
                break;
            }
         }

        return account;
    }

    public createAccount(accountNum: string, balance: number): IDestination {
        
        const account = this.findAccountByAccountNum(accountNum);
        

        if (account != undefined) {
            return {
                id: account.getAccountNum(),
                balance: account.getBalance()
            }
        }

        this.listAccount.push(new Account(accountNum, balance));

        return {
            id: accountNum,
            balance: balance
        }

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