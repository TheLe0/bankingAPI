import { IRepository } from ".";
import { Account } from "../model";

export default class InMemory implements IRepository {

    private listAccount: Array<Account>;

    constructor() {
        this.listAccount = new Array<Account>();
    }


    public resetDatabase(): boolean {
        this.listAccount = new Array<Account>();

        return true;
    }



}