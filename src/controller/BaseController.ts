import { IRepository, RepositorySingleton } from '../repository'
import { AppConfig } from '../config';

export abstract class BaseController {
    protected static repository :IRepository = RepositorySingleton.getInstance(AppConfig.DatabaseType);
}