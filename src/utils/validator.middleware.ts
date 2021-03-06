import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { Logger } from '.';
import { statusCodes } from './status-codes.map';

const ajv = new Ajv();

export const validateSchema = (schema:any) => (req:Request,res:Response,next:NextFunction)=>{
        const valid = ajv.validate(schema,req.body);
        if(!valid){
            if(process.env.NODE_ENV !== 'test'){
                Logger.error(ajv.errors);
            }
            return res.status(statusCodes.INVALID_REQUEST).json({ status: false, message: 'Invalid input', data: ajv.errors }).end();
        };
        return next();
    };