import db from '../database/prisma-connection';

/**
 * @desc checks whether user can create more stores
 * @param quantity 
 * @returns boolean
 */
export const validatePlanForStore = async(userId:string,quantity = 1, ):Promise<any> => {
    const { no_of_stores:allowedStores } = await db.user_view.findFirst({ where:{ user_id:userId },select:{ no_of_stores:true,no_of_members:true } }) ?? {};
    const createdStores = await db.stores.count({ where:{ created_by:userId } });
    return allowedStores && (createdStores + quantity) < allowedStores;
};