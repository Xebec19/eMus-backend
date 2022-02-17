import { Response } from 'express';
import { IResponse } from '../abstractions/interfaces/response.model';

const sendResponse = (res:Response,payload:IResponse) => res.send(payload).end();

export default sendResponse;