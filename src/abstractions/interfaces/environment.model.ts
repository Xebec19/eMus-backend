export interface IEnvironment {
    database: string,
    user: string,
    password: string,
    host: string,
    port: number | string,
    jwtSecret: string
}