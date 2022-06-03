import express, { NextFunction, Request, Response } from 'express';
import { authRoutes, publicRoutes, storeRoutes } from './routes/index';
import AppError from './abstractions/classes/app-error.class';
import { Logger, morganMiddleware } from './utils';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morganMiddleware);

app.use('/public', publicRoutes );
app.use('/auth', authRoutes);
app.use('/store',storeRoutes);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  Logger.error(err.stack);
if(!err.isOperational){
  process.exit(1);
}
});

export default app;