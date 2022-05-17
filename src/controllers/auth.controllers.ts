import { users } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import db from '../database/postgres-connection';
import { statusCodes } from '../utils/status-codes.map';
import { hashString } from '../utils/bcrypt.utils';
import AppError from '../abstractions/classes/app-error.class';
import { jwtSign } from '../utils/jwt.utils';
import randomString from '../utils/randomString.utils';

export const loginPost = async (req: Request, res: Response) => {
    res.send({ msg:'Work in progress' });
};

/**
 * @route /auth/register
 * @type POST
 * @desc creates a new user
 */
export const registerUser = async (req: Request, res: Response, next:NextFunction) => {
        const { email, user_name:userName, first_name:firstName, last_name:lastName, password } = req.body;
        const hash = await hashString(password);
        if(!hash) {
            throw new AppError('Invalid hash!');
        }
        const isEmailDuplicate = await db.users.findFirst({ where:{ email },select:{ email:true } });
        /* eslint-disable no-prototype-builtins */
        if(isEmailDuplicate && isEmailDuplicate.hasOwnProperty('email')){
            throw new AppError(`User exists : ${email}`,401,true);
        }
        await db.users.create({
            data: <users>{
                user_id: randomString(),
                user_name:userName,
                email,
                first_name:firstName,
                last_name:lastName,
                password: hash,
            },
        });
        return res.status(statusCodes.SUCCESS).json({ status: true, data: null, message: 'User created successfully' });
};