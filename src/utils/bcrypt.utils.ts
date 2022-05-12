import bcrypt from 'bcryptjs';
import AppError from '../abstractions/classes/app-error.class';
import { statusCodes } from './status-codes.map';

// hashes a given string
export const hashString = async(text:string):Promise<string|any> => {
    if(!text || typeof text !== 'string'){
        throw new AppError('Invalid string',statusCodes.ERROR);
    }
    const hash = bcrypt.hashSync(text, 8);
    return hash;
};

// compares hash value saved in db with users input
export const compareString = async(hash:string, original:string) => 
    // todo compare password in db with user input password
     false;
