/**
 * @desc checks whether user can create more stores and add members
 * @param entity 
 * @param quantity 
 * @returns boolean
 */
export const validatePlan = async(entity:string,quantity = 1):Promise<boolean> => {
    switch(entity)
    {
        case 'store':
            
            break;
        case 'member':
        /**
         * todo #4 #3 
         * add check for member
         */
        break;
        default:
            return false;
    }
    return true;
};