import { statusCodes } from "../../utils/status-codes.map";

export default class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(message:string, statusCode:number = statusCodes.INTERNAL_SERVER_ERROR, isOperational:boolean = true, stack:string=""){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        if(stack){
            this.stack = stack;
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}