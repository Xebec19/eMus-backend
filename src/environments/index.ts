import { IEnvironment } from "../abstractions/interfaces/environment.model";

const env:IEnvironment = {
    database: process.env.DB_DATABASE ?? '',
    username: process.env.DB_USERNAME ?? '',
    password: process.env.DB_PASSWORD ?? '',
    host: process.env.DB_HOST ?? '',
    dbDialect: process.env.DB_DIALECT ?? ''
}