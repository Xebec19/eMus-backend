import db from './prisma-connection';

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