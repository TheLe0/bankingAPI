import { Router } from 'express';
import { ResetController } from '../controller';

const routes :Router = Router();

routes.get('/', (req, res) => {
    res.status(202).json('Made with 💙 by TheLe0');
});

routes.post('/reset', ResetController.reset)

export default routes;
