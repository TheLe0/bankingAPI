import * as dotenv from 'dotenv';
import { DatabaseType } from '.';

dotenv.config();

export const envVars: {
    readonly DatabaseType: DatabaseType
}= {
    DatabaseType: Number(process.env.DATABASE_TYPE) as DatabaseType
}