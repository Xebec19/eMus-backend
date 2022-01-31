import { IEnvironment } from '../abstractions/interfaces/index.model';

const env:IEnvironment = {
    database: process.env.DB_DATABASE ?? '',
    username: process.env.DB_USERNAME ?? '',
    password: process.env.DB_PASSWORD ?? '',
    host: process.env.DB_HOST ?? ''
};

export default env;