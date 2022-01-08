import { Request, Response } from 'express';
import { statusCodes } from '../utils/index.utils';


const login = async(req:Request, res:Response) => {
    res.status(statusCodes.SUCCESS).json({ 'message':'success' }).end();
};

export default login;