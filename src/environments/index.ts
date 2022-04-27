import * as de from 'dotenv';
import { IEnvironment } from '../abstractions/interfaces/index.model';
import Logger from '../utils/logger.util';

const dotenv = de.config();
if (dotenv.error) {
  Logger.error('Error occurred while setting dot env files : ', dotenv.error);
}
 
const env:IEnvironment = {
    database: process.env.DB_DATABASE ?? '',
    user: process.env.DB_USERNAME ?? '',
    password: process.env.DB_PASSWORD ?? '',
    host: process.env.DB_HOST ?? '',
    port: process.env.DB_PORT ?? 0,
    jwtSecret: process.env.JWT_SECRET ?? ''
};

export default env;