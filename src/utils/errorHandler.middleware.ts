import { NextFunction, Request, Response } from "express";

const errorHandler = (func:Function) => {
    return async (req:Request, res:Response,next:NextFunction) => {
        try{
            await func(req, res, next);
        } catch(err){
            console.error('Error:::',err);
            next(err)
        }
    }
}

export default errorHandler;