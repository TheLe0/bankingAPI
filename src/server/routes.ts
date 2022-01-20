import { Router } from 'express';

const routes :Router = Router();

routes.get('/', (req, res) => {
    res.status(202).json('Made with 💙 by TheLe0');
});

export default routes;
