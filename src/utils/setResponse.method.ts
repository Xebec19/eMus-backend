import { ResponseMethod } from "../abstractions/classes/response.class";
import { IResponse } from "../abstractions/interfaces/response.model";

export const setResponse = (data:any,status:boolean,message:string):IResponse => {
    const setPayload = new ResponseMethod(status,message,data);
    return setPayload.payload;
}