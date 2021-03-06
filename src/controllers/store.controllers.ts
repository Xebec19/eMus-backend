import { NextFunction, Request, Response } from 'express';
import AppError from '../abstractions/classes/app-error.class';
import { IResponse } from '../abstractions/interfaces/response.model';
import { createNewStore } from '../database/store.context';
import { jwtCheck, statusCodes } from '../utils';
import { checkToken } from '../utils/checkToken.middleware';
import { validatePlanForStore } from '../utils/validatePlan.utils';

/**
 * @route /store/create
 * @type POST
 * @desc creates a store
 */
export const createStore = async(req:Request, res:Response, next:NextFunction) => {
    const { store_name:storeName, description } = req.body;
    const token = req.headers.authorization?.split(' ')[1] ?? '';

    const allow = await validatePlanForStore(res.locals?.user?.user_id);
    if(allow)
    {
        const payload = await jwtCheck(token);
        if(!payload?.userId) throw new AppError('No user found',statusCodes.INVALID_REQUEST,true);
        const storeId = await createNewStore({ storeName,description,createdBy:payload.userId });
        const response:IResponse = {
            status:true,
            message:'Store created',
            data:storeId
        };
        return res.status(statusCodes.SUCCESS).json(response).end();
    }
    const response:IResponse = {
        status:false,
        message:'User can not create more stores!',
        data:'Min number of stores allowed in user plan have exceed! Please upgrade your plan to create more stores.'
    };
    return res.status(statusCodes.ERROR).json(response).end();
};

/**
 * @route /store/delete
 * @type GET
 * @desc deletes a store
 */
export const deleteStore = async(req:Request,res:Response) => {
    const storeId = req.query.store_id;

    // check if store to be deleted belongs to the user
    // validateStore(res.locals.user.user_id)
    return false;
};