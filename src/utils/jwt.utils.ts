import jwt from 'jsonwebtoken';
import AppError from '../abstractions/classes/app-error.class';
import env from '../environments/index';
import { statusCodes } from './status-codes.map';

/**
 * @desc returns a jwt
 * @param payload 
 * @returns Promise<string>
 */
export const jwtSign = async(payload:any) => {
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
export const jwtCheck = async(token:string):Promise<any> => {
    // todo #6 #5 validate jwt token
    jwt.verify(token,env.jwtSecret,(err,decoded)=> {
        if(err){
            throw new AppError(`Error occurred while decoding token ${token}`,statusCodes.INTERNAL_SERVER_ERROR,true);
        }
        return decoded;
    });
};
     
