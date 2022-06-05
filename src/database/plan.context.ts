import AppError from '../abstractions/classes/app-error.class';
import { IPlan } from '../abstractions/interfaces/plan.model';
import db from './prisma-connection';

// @desc returns plan_id or all fields of free plan depending on params
export const getFreePlan = async (onlyId = true) => {
    if(onlyId)
    {
        const { plan_id } = (await db.plans.findFirst({ where: { price: 0 }, select:{ plan_id: true } }) || {});
        return plan_id;
    } 
        const plan = await db.plans.findFirst({ where: { price: 0 } });
        return plan; 
};

/**
 * @desc finds plan by id
 * @param plan_id 
 * @returns { string, integer, integer, integer, integer} plan_name, no_of_stores, no_of_members, price
 */
export const findPlanById = async(plan_id:string):Promise<IPlan|null> => {
    if(!plan_id)
    {
        throw new AppError('Invalid params! No plan id given.');
    }
    const plan = await db.plans.findFirst({ where: { plan_id }, select:{ plan_name:true,no_of_stores:true, no_of_members:true, price:true } });
    return plan;
};