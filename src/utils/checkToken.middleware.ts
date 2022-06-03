import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../abstractions/interfaces/index.model';
import { jwtCheck } from './jwt.utils';

export const checkToken = (req:Request, res:Response, next:NextFunction) => {
    let response: IResponse;
    jwtCheck(''); // todo pass token in header as param and then check in user
};