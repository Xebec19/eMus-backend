import { users } from '@prisma/client';
import { IUser } from '../abstractions/interfaces/index.model';
import { randomString } from '../utils';
import db from './prisma-connection';

/**
 * @desc checks if a given email exists in db
 * @params {string} email
 * @returns {boolean} true if email exists else false
 */
export const checkEmail = async (payload:string) => {
    const { email } = ( await db.users.findFirst({ where: { email: payload }, select:{ email:true } }) || {});
    if(email){
        return true;
    } 
    return false;
};

/**
 * @desc creates new user
 * @param {IUser} payload 
 */
export const createUser = async (payload:IUser) => {
    const { user_name, email, first_name, last_name, password } = payload;
    const user = await db.users.create({
        data: <users>{
            user_id: randomString(),
            user_name,
            email,
            first_name,
            last_name,
            password,
        },
        select:{ user_id: true }
    });

    return user;
};

/**
 * @desc fetches user data
 * @param {string} userIdentifier
 */
export const findUser = async (userIdentifier:string): Promise<{user_id:string,password:string}|null> => {
    const user = await db.users.findFirst({
        where: {
            OR: [
                {
                    email: {
                        equals: userIdentifier,
                        mode: 'insensitive'
                    }
                },
                {
                    user_name: {
                        equals: userIdentifier,
                        mode: 'insensitive'
                    }
                }
            ]
        },
        select: {
            user_id: true,
            password: true
        }
    });
    return user;
};