import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import auth from './routes/auth.route';
import { statusCodes } from './utils/status-codes.map';
import publicApis from './routes/public.route';
import morganMiddleware from './utils/morgan.utils';
import Logger from './utils/logger.util';
import { IResponse } from './abstractions/interfaces/index.model';
import AppError from './abstractions/classes/app-error.class';

const app = express();

app.use(morganMiddleware);

app.use('/public', publicApis);
app.use('/auth', auth);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  Logger.error(err);
if(!err.isOperational){
  process.exit(1);
}
res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ status: false, data: null, message: err.message }).end();
});

export default app;