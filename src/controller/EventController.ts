import { Request, Response } from 'express';
import { BaseController } from './BaseController'
import { EventType } from './EventType';

class EventController extends BaseController {

    public getEvent(req: Request, res: Response) {

        const { type, destination, amount} = req.body;

        switch (type as EventType) {
            case EventType.DEPOSIT:
                const account = BaseController.repository.createAccount(destination, amount);

                res.status(202).json({
                    destination: {
                        id: account.id,
                        balance: account.balance
                    }
                });
            break;
            case EventType.WITHDRAW:
                res.status(202).send("É UM SAQUE");
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