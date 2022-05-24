import { NextFunction, Request, Response } from 'express';
import { Logger } from '.';
import AppError from '../abstractions/classes/app-error.class';
import { IResponse } from '../abstractions/interfaces/index.model';

export const errorHandler = (fn:(req:Request, res:Response, next:NextFunction) => void) => async (req:Request, res:Response,next:NextFunction) => {
        try{
            return await fn(req, res, next);
        } catch(err:AppError | any){
            /* eslint-disable no-prototype-builtins */
            if(err?.isOperational){
                if(process.env.NODE_ENV !== 'test'){
                    Logger.error(err.stack);
                }
                const payload:IResponse = {
                status: false,
                data: null,
                message: err.message
                };
                return res.status(err.statusCode).json(payload);
            }
            return next(err);
        }
    };