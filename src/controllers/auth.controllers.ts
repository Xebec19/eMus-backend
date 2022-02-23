import { NextFunction, Request, Response } from 'express';

export const loginPost = async (req: Request, res: Response) => {
    console.log('Work in progress'); // TODO add controller for login
};

/**
 * @route /auth/register
 * @param req email, password
 * @param res 
 */
export const registerUser = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const { email, user_name:userName, first_name:firstName, last_name:lastName, password } = req.body;
        
    } catch(error:any){
        next(error);
    }
};