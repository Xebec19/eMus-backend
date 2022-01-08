import { IResponse } from "../interfaces/response.model";

export class ResponseMethod {
    private data:IResponse;
    constructor(status:boolean,message:string,data:any){
        this.data = {
            message,
            data,
            status
        }
    }
    get payload(){
        return this.data;
    }
}