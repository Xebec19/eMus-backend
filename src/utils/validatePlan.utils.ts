import db from '../database/prisma-connection';

interface INoOfStores {
    no_of_stores:number;
}

/**
 * @desc checks whether user can create more stores
 * @param quantity 
 * @returns boolean
 */
export const validatePlanForStore = async(userId:string,quantity = 1, ):Promise<any> => {
    const { no_of_stores:allowedStores } = <INoOfStores>(await db.$queryRaw`SELECT no_of_stores from user_view where user_id = ${userId}`) || {};
    const createdStores = await db.stores.count({ where:{ created_by:userId } });
    return allowedStores && (createdStores + quantity) < allowedStores;
};