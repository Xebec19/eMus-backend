import dotenv from 'dotenv';
import { Client, Pool } from 'pg';
import env from '../environments';

dotenv.config();

const { database, user, password, host, port } = env;

const config = {
    user,
    host,
    database,
    password,
    port,
};

const pool = new Pool(config);


export default config;

