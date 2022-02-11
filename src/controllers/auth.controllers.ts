import { Request, Response } from 'express';
import Logger from '../utils/logger.util';

export const loginForm = async (req: Request, res: Response) => {
    res.render('login');
    res.end();
};

export const loginPost = async (req: Request, res: Response) => {
    console.log('Work in progress'); // TODO add controller for login
};

export const registerForm = async (req: Request, res: Response) => {
    res.render('register');
    res.end();
};

/**
 * @route /auth/register
 * @param req email, password
 * @param res 
 */
export const registerUser = async (req: Request, res: Response) => {
    Logger.info('request body',req.body);
    res.json({ message:'Success' }).end();
};