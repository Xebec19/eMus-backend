import { Request, Response } from 'express';

export const loginForm = async(req:Request, res:Response) => {
    res.render('login');
    res.end();
};

export const loginPost = async(req:Request, res:Response) => {

}

export const registerForm = async(req:Request, res:Response) => {
    res.render('register');
    res.end();
}