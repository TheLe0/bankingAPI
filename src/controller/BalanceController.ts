import { Request, Response } from 'express';
import { IRepository, RepositoryFactory} from '../repository'
import { AppConfig } from '../config';

class BalanceController {

    public getBalanceFromAccountNum(req: Request, res: Response) {

        const accountNum  = String(req.query.account_id);

        const repository :IRepository = RepositoryFactory.getRepository(AppConfig.DatabaseType);

        const balance = repository.getBalanceByAccountNum(accountNum);

        if (balance == undefined) {
            res.status(404).send("0");
        } else {
            res.status(202).send(balance);
        }
    }
}

export default new BalanceController();