import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import auth from './routes/auth.route';
import { statusCodes } from './utils/status-codes.map';
import publicApis from './routes/public.route';
import logger from './utils/logger.util';
import morganMiddleware from './utils/morgan.utils';

const app = express();

app.use(morganMiddleware);

const init = async () => {
  try {
    // await sequelize.authenticate();
    logger.log({ level: 'info', message: 'Postgres ::: Success' });
  } catch (error: any) {
    logger.error({ message: 'Postgres ::: Failed' });
  }
};

init();

app.use('/public', publicApis);
app.use('/auth', auth);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('--error', err);
  res.status(statusCodes.INTERNAL_SERVER_ERROR);
  res.json({ message: 'Oops something broke!' }).end();
});

export default app;