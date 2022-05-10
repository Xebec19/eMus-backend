import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../abstractions/interfaces/response.model';
import Logger from './logger.util';
import sendResponse from './response.util';
import { statusCodes } from './status-codes.map';

const ajv = new Ajv();

const validateSchema = (schema:any) => (req:Request,res:Response,next:NextFunction)=>{
        const valid = ajv.validate(schema,req.body);
        if(!valid){
            Logger.error(ajv.errors);
            const payload: IResponse = {
                statusCode: statusCodes.INVALID_INPUT,
                status: false,
                message: 'Invalid input',
                data: ajv.errors || []
            };
            return sendResponse(payload);
        };
        return next();
    };

export default validateSchema;