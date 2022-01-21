import { Request, Response } from 'express';
import { BaseController } from './BaseController'
import { EventType } from './EventType';

class EventController extends BaseController {

    public getEvent(req: Request, res: Response) {

        const { type, destination, origin, amount} = req.body;
        var account = undefined;

        switch (type as EventType) {
            case EventType.DEPOSIT:
                account = BaseController.repository.createAccount(destination, amount);

                res.status(201).json({
                    destination: {
                        id: account.id,
                        balance: account.balance
                    }
                });
            break;
            case EventType.WITHDRAW:
                account = BaseController.repository.withdraw(origin, amount);

                if (account == undefined) {
                    res.status(404).send("0");
                } else {
                    res.status(202).json({
                        origin: {
                            id: account.id,
                            balance: account.balance
                        }
                    });
                }
            break;
            case EventType.TRANSFER:
                res.status(202).send("É UMA TRANSFERENCIA");
            break;
            default:
                res.status(404).send("Operação inválida!");
        }

    }
}

export default new EventController();