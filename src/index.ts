import express, { NextFunction, Request, Response } from "express"
import expressEjsLayouts from "express-ejs-layouts";
import auth from "./routes/auth.route"
import path from 'path';
import { statusCodes } from "./utils/status-codes.map";
import publicApis from './routes/public.route';
import logger from "./utils/logger.util";

const app = express()

app.use("/auth",auth);

app.use('/css', express.static(path.join(__dirname,'/public/css')));
app.use('/img', express.static(path.join(__dirname,'/public/images')));
app.use('/js', express.static(path.join(__dirname,'/public/js')))
app.use(expressEjsLayouts);
app.set('layout','layouts/main');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/public/views'));

app.get('/',(req:Request,res:Response) => res.redirect('/public/home'));

app.use('/public',publicApis);

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  logger.error('--error',err);
  res.status(statusCodes.INTERNAL_SERVER_ERROR);
  res.json({message:"Oops something broke!"}).end();
});

export default app;