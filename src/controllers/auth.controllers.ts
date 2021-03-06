
import { NextFunction, Request, Response } from 'express';
import AppError from '../abstractions/classes/app-error.class';
import { checkEmail, createUser, findUser } from '../database/user.context';
import { IResponse, IUser } from '../abstractions/interfaces/index.model';
import { compareString, hashString, jwtSign, randomString, statusCodes } from '../utils';
import { getFreePlan } from '../database/plan.context';

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
        const plan_id = await getFreePlan();
        const payload:IUser = {
                user_id: randomString(),
                user_name:userName,
                email,
                first_name:firstName,
                last_name:lastName,
                password: hash,
                plan_id: `${plan_id  }`
            };
        const user = await createUser(payload);
        const response: IResponse = {
            status: true, data: user, message: 'User created successfully'
        };
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
        throw new AppError('User does not exists!',statusCodes.INVALID_REQUEST,true);
    }
    if(!compareString(password,user.password))
    {
        throw new AppError('Password did not match!',statusCodes.INVALID_REQUEST,true);
    }
    
    const token = await jwtSign({ userId:user.user_id });
    const response: IResponse = {
        status: true,
        message: 'User logged in successfully',
        data: `Bearer ${  token}`
    };
    return res.status(201).json(response).end();
};