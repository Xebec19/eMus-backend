import { stores } from '@prisma/client';
import { IStore } from '../abstractions/interfaces/index.model';
import { randomString } from '../utils';
import db from './prisma-connection';

/**
 * @desc takes user id of creator and returns no of stores made by him/her
 * @param creator_id 
 * @returns count of stores created
 */
export const findStoreCount = async(creator_id:string):Promise<number> => {
    const count = await db.stores.count({ where:{ created_by:creator_id,status:'active' } });
    return count;
};

/**
 * @desc creates a store and returns store_id
 * @param details 
 * @returns {string} store_id
 */
export const createNewStore = async(details:IStore):Promise<string> => {
    const storeId = `store-${  await randomString()}`;
    const payload = {
        store_id: storeId,
        store_name: details.storeName,
        description: details.description,
        created_by: details.createdBy,
        updated_by: details.createdBy
    };
    const { store_id:id } = await db.stores.create({ data:<stores>payload,select:{ store_id:true } });
    return id;
};