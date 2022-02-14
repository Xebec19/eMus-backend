import express, { NextFunction, Request, Response } from "express"
import expressEjsLayouts from "express-ejs-layouts";
import auth from "./routes/auth.route"
import path from 'path';
import { statusCodes } from "./utils/status-codes.map";
import publicApis from './routes/public.route';
import logger from "./utils/logger.util";
import morganMiddleware from "./utils/morgan.utils";
import sequelize from "./database/postgres-connection";

const app = express()

app.use(morganMiddleware);
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/img', express.static(path.join(__dirname, '/public/images')));
app.use('/js', express.static(path.join(__dirname, '/public/js')))
app.use(expressEjsLayouts);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));

const init = async () => {
  try {
    await sequelize.authenticate();
    logger.log({ level: 'info', message: 'Postgres ::: Success' });
  } catch (error: any) {
    logger.error({ message: 'Postgres ::: Failed' });
  }
};

init();

app.get('/', (req: Request, res: Response) => res.redirect('/public/home'));

app.use('/public', publicApis);
app.use("/auth", auth);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('--error', err);
  res.status(statusCodes.INTERNAL_SERVER_ERROR);
  res.json({ message: "Oops something broke!" }).end();
});

export default app;