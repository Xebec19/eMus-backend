import { Response } from 'express';
import { IResponse } from '../abstractions/interfaces/response.model';

const sendResponse = (res:Response,payload:IResponse) => {
    const { statusCode, status, message, data } = payload;
    return res.status(+statusCode).json({ status,message,data }).end();
};

export default sendResponse;