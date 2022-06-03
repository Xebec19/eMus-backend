import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../abstractions/interfaces/response.model';
import { statusCodes } from '../utils';
import { validatePlan } from '../utils/validatePlan.utils';

/**
 * @route /store/create
 * @type POST
 * @desc creates a store
 */
export const createStore = async(req:Request, res:Response, next:NextFunction) => {
    const { store_name, description } = req.body;
    // const allow = await validatePlan('store');
    const response:IResponse = {
        status:true,
        message:'Store created',
        data:null
    };
    return res.status(statusCodes.SUCCESS).json(response).end();
};