import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../abstractions/interfaces/response.model';
import Logger from './logger.util';
import { statusCodes } from './status-codes.map';

const ajv = new Ajv();

const validateSchema = (schema:any) => (req:Request,res:Response,next:NextFunction)=>{
        const valid = ajv.validate(schema,req.body);
        if(!valid){
            Logger.error(ajv.errors);
            res.status(statusCodes.INVALID_INPUT).json({ status: false, message: 'Invalid input', data: ajv.errors }).end();
        };
        return next();
    };

export default validateSchema;