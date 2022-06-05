import AppError from '../abstractions/classes/app-error.class';
import { findUserById, findUserPlan } from '../database/user.context';
import { findPlanById } from '../database/plan.context';
import { jwtCheck } from './jwt.utils';
import { findStoreCount } from '../database/store.context';

/**
 * @desc checks whether user can create more stores and add members
 * @param entity 
 * @param quantity 
 * @returns boolean
 */
export const validatePlan = async(token:string,entity:string,quantity = 1):Promise<boolean> => {
    const payload = await jwtCheck(token);
    if(!payload?.userId)
    {
        throw new AppError('No user found!');
    }
    switch(entity)
    {
        case 'store': {
            const plan = await findUserPlan(payload?.userId);
            const storeCount = await findStoreCount(payload?.userId);
            if(plan?.no_of_stores && plan?.no_of_stores > storeCount)
            {
                return true;
            }
            break;
        }
        case 'member': {
        /**
         * todo #4 #3 
         * add check for member
         */

        return false;
        break;
        }
        default:
            return false;
    }
    return false;
};