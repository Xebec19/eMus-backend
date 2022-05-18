import { NextFunction, Request, Response } from 'express';
import AppError from '../abstractions/classes/app-error.class';
import { IResponse } from '../abstractions/interfaces/index.model';
import Logger from './logger.util';

const errorHandler = (fn:(req:Request, res:Response, next:NextFunction) => void) => async (req:Request, res:Response,next:NextFunction) => {
        try{
            await fn(req, res, next);
        } catch(err:AppError | any){
            /* eslint-disable no-prototype-builtins */
            if(err.hasOwnProperty('isOperational') && err.isOperational){
                Logger.error(err.message);
                const payload:IResponse = {
                status: false,
                data: null,
                message: err.message
                };
                res.status(err.statusCode).json(payload).end();
                return;
            }
            next(err);
        }
    };

export default errorHandler;