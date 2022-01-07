import { Request, Response } from 'express';
import statusCodes from '../utils/status-codes.map';

const login = async(req:Request, res:Response) => {
    // res.status(statusCodes.SUCCESS).json({ 'message':'success' }).end();
    throw new Error('sent error');
};

export default login;