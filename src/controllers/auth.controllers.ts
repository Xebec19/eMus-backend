import { NextFunction, Request, Response } from 'express';

export const loginPost = async (req: Request, res: Response) => {
    console.log('Work in progress'); // TODO add controller for login
};

/**
 * @route /auth/register
 * @type POST
 * @desc creates a new user
 * @param { email: string, user_name: string, first_name: string, last_name: string, password: string} req
 * @param {any} res
 */
export const registerUser = async (req: Request, res: Response, next:NextFunction) => {
    try{
        let { email, user_name:userName, first_name:firstName, last_name:lastName, password } = req.body;
            
    } catch(error:any){
        next(error);
    }
};