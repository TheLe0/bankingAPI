import { Request, Response } from 'express';
import { IRepository, RepositoryFactory} from '../repository'
import { AppConfig } from '../config';

class ResetController {

    public reset(req: Request, res: Response)
    {
        const repository :IRepository = RepositoryFactory.getRepository(AppConfig.DatabaseType);
        
        repository.resetDatabase();
        res.status(200);
    }

}

export default new ResetController();