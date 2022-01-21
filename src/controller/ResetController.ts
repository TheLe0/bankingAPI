import { Request, Response } from 'express';
import { BaseController } from './BaseController'

class ResetController extends BaseController {

    public reset(req: Request, res: Response)
    {        
        BaseController.repository.resetDatabase();
        res.status(200).send("OK");
    }

}

export default new ResetController();