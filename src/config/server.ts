import * as dotenv from 'dotenv';

dotenv.config();

export const serverConfig: {
    readonly DatabaseType: string
}= {
    DatabaseType: process.env.DATABASE_TYPE
}