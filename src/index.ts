import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import auth from './routes/auth.route';
import { statusCodes } from './utils/status-codes.map';
import publicApis from './routes/public.route';
import AppError from './abstractions/classes/app-error.class';
import { Logger, morganMiddleware } from './utils';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
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