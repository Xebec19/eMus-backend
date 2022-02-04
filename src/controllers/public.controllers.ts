import { Request, Response } from 'express';

const home = async (req:Request,res:Response) => {
    res.render('home');
};

export default home;