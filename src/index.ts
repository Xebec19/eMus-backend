import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import auth from './routes/auth.route';
import { statusCodes } from './utils/status-codes.map';
import publicApis from './routes/public.route';
import logger from './utils/logger.util';
import morganMiddleware from './utils/morgan.utils';
import Logger from './utils/logger.util';
import sendResponse from './utils/response.util';
import { IResponse } from './abstractions/interfaces/index.model';
import AppError from './abstractions/classes/app-error.class';

const app = express();

app.use(morganMiddleware);

app.use('/public', publicApis);
app.use('/auth', auth);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  Logger.error(err);
  let payload:IResponse = {
    statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    status: false,
    data: null,
    message: err.message
}
if(!err.isOperational){
  process.exit(1);
}
return sendResponse(payload);
});

export default app;