export interface IEnvironment {
    database: string,
    username: string,
    password: string,
    host: 'localhost' | string,
    dialect: 'postgres'
}