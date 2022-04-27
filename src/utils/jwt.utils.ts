import jwt from 'jsonwebtoken';
import env from '../environments/index';

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

export const jwtCheck = async() => 
    // todo validity jwt token
     false;
