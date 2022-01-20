import { Request, Response } from 'express';
import { IRepository, RepositoryFactory} from '../repository'
import { AppConfig } from '../config';

class BalanceController {

    public getBalanceFromAccountNum(req: Request, res: Response) {

        const repository :IRepository = RepositoryFactory.getRepository(AppConfig.DatabaseType);
    }
}

export default new BalanceController();