import dotenv from 'dotenv';
import env from '../environments';
import { Client, Pool } from 'pg';
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

