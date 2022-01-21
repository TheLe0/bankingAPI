import { IRepository, RepositoryFactory } from '.';
import { DatabaseType } from "../config";

export default class RepositorySingleton {

    private  static _instance :IRepository;

    private constructor() { }

    public static getInstance(type: DatabaseType): IRepository {

        if (this._instance == undefined) {
            this._instance = RepositoryFactory.getRepository(type);
        }

        return this._instance;
    }
}