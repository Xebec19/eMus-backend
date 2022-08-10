import { NextFunction, Request, Response } from 'express';
import AppError from '../abstractions/classes/app-error.class';
import { jwtCheck } from './jwt.utils';
import { statusCodes } from './status-codes.map';

export const checkToken = async(req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] ?? '';
    if(!token){
        throw new AppError('No token found!',statusCodes.FORBIDDEN,true);
    }
    const payload = await jwtCheck(token);
    if(!payload)
    {
        throw new AppError('No user found!',statusCodes.FORBIDDEN,true);
    }
    next();
};