
import { NextFunction, Request, Response } from 'express';
import AppError from '../abstractions/classes/app-error.class';
import { checkEmail, createUser, findUser } from '../database/auth.context';
import { IResponse, IUser } from '../abstractions/interfaces/index.model';
import { compareString, hashString, jwtSign, randomString, statusCodes } from '../utils';

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
        const isEmailExist = await checkEmail(email);
        if(isEmailExist){
            throw new AppError(`User exists : ${email}`,401,true);
        }
        const payload:IUser = {
                user_id: randomString(),
                user_name:userName,
                email,
                first_name:firstName,
                last_name:lastName,
                password: hash,
            };
        const user = await createUser(payload);
        const response: IResponse = {
            status: true, data: user, message: 'User created successfully'
        }
        return res.status(statusCodes.SUCCESS).json(response);
};

/**
 * @route /auth/login
 * @type POST
 * @desc checks user credentials and returns jwt token
 */
export const loginUser = async (req:Request, res:Response) => {
    const { user_identifier:userIdentifier, password } = req.body;
    const user = await findUser(userIdentifier);
    if(!user)
    {
        throw new AppError('User does not exists!',statusCodes.INVALID_INPUT,true);
    }
    if(!compareString(password,user.password))
    {
        throw new AppError('Password did not match!',statusCodes.INVALID_INPUT,true);
    }
    const token = await jwtSign(user.user_id);
    const response: IResponse = {
        status: true,
        message: 'User logged in successfully',
        data: token
    }
    return res.status(201).json(response).end();
};