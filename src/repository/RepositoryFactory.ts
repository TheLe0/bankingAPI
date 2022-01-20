import { IRepository } from ".";
import { DatabaseType } from "../config";
import InMemory from "./InMemory";

export default abstract class  RepositoryFactory {
    
    public static getRepository(type: DatabaseType) :IRepository {
        switch (type) {
            case DatabaseType.IN_MEMORY: return new InMemory();
            default: return undefined;
        }
    }
}