import { ResponseMethod } from '../abstractions/classes/response.class';
import { IResponse } from '../abstractions/interfaces/response.model';

 /* eslint-disable import/prefer-default-export */
export const setResponse = (data:any,status:boolean,message:string):IResponse => {
    const setPayload = new ResponseMethod(status,message,data);
    return setPayload.payload;
};