import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import sendResponse from './response.util';
import { statusCodes } from './status-codes.map';

/* eslint-disable import/prefer-default-export */
export const errorHandler = (fn:(req:Request, res:Response) => void) => async (req:Request, res:Response,next:NextFunction) => {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                sendResponse(res,{ status:false,statusCode:statusCodes.ERROR,message:errors.array()[0]?.msg,data:errors.array() });
            } else await fn(req, res);
        } catch(err){
            next(err);
        }
    };