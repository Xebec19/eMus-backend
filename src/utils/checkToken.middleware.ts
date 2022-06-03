import { NextFunction, Request, Response } from 'express';
import AppError from '../abstractions/classes/app-error.class';
import { IResponse } from '../abstractions/interfaces/index.model';
import { findUserById } from '../database/auth.context';
import { jwtCheck } from './jwt.utils';
import { statusCodes } from './status-codes.map';

export const checkToken = async(req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] ?? '';
    if(!token){
        throw new AppError('No token found!',statusCodes.INVALID_REQUEST,true);
    }
    const userId = await jwtCheck(token);
    const userData = await findUserById(userId);
    if(!userData)
    {
        throw new AppError('No user found!',statusCodes.INVALID_REQUEST,true);
    }
    next();
};