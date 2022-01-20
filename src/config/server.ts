import * as dotenv from 'dotenv';

dotenv.config();

export const serverConfig: {
    readonly Host: string
    readonly Port: string
}= {
    Host: process.env.HOST,
    Port: process.env.PORT
}