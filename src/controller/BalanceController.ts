import { Request, Response } from 'express';
import { BaseController } from './BaseController'

class BalanceController extends BaseController{

    public getBalanceFromAccountNum(req: Request, res: Response) {

        const accountNum  = String(req.query.account_id);

        const balance = BaseController.repository.getBalanceByAccountNum(accountNum);

        if (balance == undefined) {
            res.status(404).send("0");
        } else {
            res.status(200).send(String(balance));
        }
    }
}

export default new BalanceController();