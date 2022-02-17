import { Request, Response } from 'express';
import Logger from '../utils/logger.util';
import sendResponse from '../utils/response.util';
import { statusCodes } from '../utils/status-codes.map';

export const loginPost = async (req: Request, res: Response) => {
    console.log('Work in progress'); // TODO add controller for login
};

/**
 * @route /auth/register
 * @param req email, password
 * @param res 
 */
export const registerUser = async (req: Request, res: Response) => {
    sendResponse(res,{ status:true,message:'Success',statusCode:statusCodes.SUCCESS,data:[] });
};