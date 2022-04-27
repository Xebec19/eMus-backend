export interface IResponse {
    statusCode: number | string,
    status: boolean,
    data: string | Object | null,
    message: string
}