import { IRepository } from ".";
import { IDestination, ITransfer } from "../contract";
import { Account } from "../model";

export default class InMemory implements IRepository {

    private listAccount: Array<Account>;

    constructor() {
        this.listAccount = new Array<Account>();
    }

    public transferAmount(accountNumFrom: string, accountNumTo: string, amount: number): ITransfer {
        
        let accountFrom = this.findAccountByAccountNum(accountNumFrom);
        let accountTo = this.findAccountByAccountNum(accountNumTo);

        if (accountFrom == undefined) {
            return undefined;
        }

        if (accountTo == undefined) {
            const { id, balance} = this.createAccount(accountNumTo, 0);

            accountTo = new Account(id, balance);
        }

        accountFrom = this.updateBalanceAccount(accountFrom, (amount * -1));
        accountTo = this.updateBalanceAccount(accountTo, amount);

        return {
            origin: { 
                id: accountFrom.getAccountNum(),
                balance: accountFrom.getBalance()
            },
            destination: {
                id: accountTo.getAccountNum(),
                balance: (accountTo.getBalance() == 0) ? amount : accountTo.getBalance()
            }
        }
    }

    public withdraw(accountNum: string, amount: number): IDestination {
        
        let account = this.findAccountByAccountNum(accountNum);

        if (account == undefined) {
            return undefined;
        }

        account = this.updateBalanceAccount(account, (amount * -1));

        return {
            id: account.getAccountNum(),
            balance: account.getBalance()
        }

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

    private updateBalanceAccount(account: Account, value: number) :Account {

         this.listAccount.forEach( (element, index) => {
            if (element.getAccountNum() == account.getAccountNum()) {
                element.setBalance(element.getBalance() + value);

                this.listAccount[index] = element;
                
                return element;
            }
         });

        return account;
    }

    public createAccount(accountNum: string, balance: number): IDestination {
        
        let account = this.findAccountByAccountNum(accountNum);
        
        if (account != undefined) {

            account = this.updateBalanceAccount(account, balance);
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