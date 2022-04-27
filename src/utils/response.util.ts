import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../abstractions/interfaces/response.model';

const sendResponse = (payload:IResponse) => {
    const { statusCode, status, message, data } = payload;
    return (req:Request,res:Response,next:NextFunction) => res.status(+statusCode).json({ status,message,data }).end();
};

export default sendResponse;