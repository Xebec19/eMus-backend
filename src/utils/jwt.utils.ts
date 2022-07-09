import jwt, { JwtPayload } from 'jsonwebtoken';
import AppError from '../abstractions/classes/app-error.class';
import db from '../database/prisma-connection';
import env from '../environments/index';
import { Logger } from './logger.util';
import { statusCodes } from './status-codes.map';

/**
 * @desc creates a token using provided payload and secret key
 * @param payload 
 * @returns {string} token
 */
export const jwtSign = async(payload:JwtPayload):Promise<string> => {
    const token = jwt.sign(
        {
        data: payload
        },
        env.jwtSecret,
        { expiresIn: '5d' }
    );
    return token;
};

/**
 * @desc validates jwt token with secret and returns payload attached with the token
 * @param token 
 */
export const jwtCheck = async(token:string) => {
    // todo #6 #5 validate jwt token
    if(typeof token === 'string'){
        const payload:any = jwt.verify(token,env.jwtSecret) ?? {};
        const count = await db.sessions.count({ where:{ token,user_id:payload?.user_id } });
        if(typeof payload === 'object' && count)
        {
            return payload?.data;
        }
    }
    return {};
};
     
