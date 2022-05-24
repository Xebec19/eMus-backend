import bcrypt from 'bcryptjs';
import { statusCodes } from '.';
import AppError from '../abstractions/classes/app-error.class';

// hashes a given string
export const hashString = async(text:string):Promise<string|any> => {
    if(!text || typeof text !== 'string'){
        throw new AppError('Invalid string',statusCodes.ERROR);
    }
    const hash = bcrypt.hashSync(text, 8);
    return hash;
};

// compares hash value saved in db with users input
export const compareString = (original:string, hash:string):boolean => bcrypt.compareSync(original,hash);
