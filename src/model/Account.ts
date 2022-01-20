export default class Account {
    private _accountNum :string;
    private _balance: number;

    constructor(accountNum :string, initialBalance: number) {
        this.setAccountNum(accountNum);
        this.setBalance(initialBalance);
    }

    public getAccountNum() :string {
        return this._accountNum;
    }

    public setAccountNum(accountNum :string) {
        this._accountNum = accountNum;
    }

    public getBalance() :number {
        return this._balance;
    }

    public setBalance(balance: number) {
        this._balance = balance;
    }
}