import { users,user_view } from '@prisma/client';
import { IPlan, IUser } from '../abstractions/interfaces/index.model';
import { randomString } from '../utils';
import db from './prisma-connection';
import { findPlanById } from './plan.context';

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
    const { user_name, email, first_name, last_name, password, plan_id } = payload;
    const user = await db.users.create({
        data: <users>{
            user_id: randomString(),
            user_name,
            email,
            first_name,
            last_name,
            password,
            plan_id
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

/**
 * @desc finds if user with given user id exists
 * @params {string} userId
 */
export const findUserById = async(userId:string):Promise<user_view|null> => {
    const user = await db.user_view.findFirst({ where: { user_id: userId } });
    return user;
};

export const findUserPlan = async(user_id:string):Promise<IPlan|null> => {
    const { plan_id } = (await db.users.findFirst({ where:{ user_id }, select:{ plan_id:true } })) ?? {};
    if(plan_id)
    {
        const plan = await findPlanById(plan_id);
        return plan;
    }
    return null;
};