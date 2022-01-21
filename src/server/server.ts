import express from 'express';
import { makeLogger } from '../log';
import routes  from './routes';

export default class Server {
    private readonly app: any;
    private readonly log: any;

    constructor() {  
        this.app = express();
        this.log = makeLogger(); 

        this.setup();
    }

    private setup() {
        this.setupBodyParser();
        this.setupRoutes();
    }

    private setupBodyParser() {
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(express.json());
    }

    private setupRoutes() {
        this.app.use(routes);
    }

    public start() {
        this.app.listen(process.env.PORT || 3000, () => {
            this.log.debug({
                type: 'LOG_TYPE_1',
                message: `Server listening on port 3000`
            });
        });
    }
}