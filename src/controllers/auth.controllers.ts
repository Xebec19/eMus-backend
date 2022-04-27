import { users } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../abstractions/interfaces/response.model';
import db from '../database/postgres-connection';
import sendResponse from '../utils/response.util';
import { statusCodes } from '../utils/status-codes.map';
import { hashString } from '../utils/bcrypt.utils';
import AppError from '../abstractions/classes/app-error.class';
import { jwtSign } from '../utils/jwt.utils';

export const loginPost = async (req: Request, res: Response) => {
    console.log('Work in progress'); // TODO add controller for login
};

/**
 * @route /auth/register
 * @type POST
 * @desc creates a new user
 * @param Req<{ email: string, user_name: string, first_name: string, last_name: string, password: string }>
 */
export const registerUser = async (req: Request, res: Response, next:NextFunction) => {
        const { email, user_name:userName, first_name:firstName, last_name:lastName, password } = req.body;
        const hash = await hashString(password);
        if(!hash) {
            throw new AppError('Invalid hash!');
        }
        const user = await db.users.create({
            data: <users>{
                user_name:userName,
                email,
                first_name:firstName,
                last_name:lastName,
                password: hash,
            },
        });
        const token = jwtSign(user);
        const payload:IResponse = {
            statusCode: statusCodes.SUCCESS,
            status: true,
            data: token,
            message: 'User created successfully'
        };
        return sendResponse(payload);
};