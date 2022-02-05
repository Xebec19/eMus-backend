import { Request, Response } from 'express';

const loginForm = async(req:Request, res:Response) => {
    res.render('login');
    res.end();
};

export default loginForm;