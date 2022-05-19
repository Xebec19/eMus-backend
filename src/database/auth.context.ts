import { IUser } from '../abstractions/interfaces/index.model';
import { users } from '@prisma/client';
import db from './prisma-connection';
import randomString from '../utils/randomString.utils';

/**
 * @desc checks if a given email exists in db
 * @params {string} email
 * @returns {boolean} true if email exists else false
 */
 /* eslint-disable import/prefer-default-export */
export const checkEmail = async (payload:string) => {
    const { email } = ( await db.users.findFirst({ where: { email: payload }, select:{ email:true } }) || {});
    if(email){
        return true;
    } 
    return false;
};

/**
 * @desc creates new user
 * @param payload 
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
        select:{ user_id: true}
    });

    return user;
};