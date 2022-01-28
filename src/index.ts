import express, { NextFunction, Request, Response } from "express"
import expressEjsLayouts from "express-ejs-layouts";
import auth from "./routes/auth.route"
import { statusCodes } from './utils/index.utils'

const app = express()

app.use("/auth",auth);

app.use(express.static('public'));
app.use(expressEjsLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');
app.set('views','./public/views')

app.get('/render',(req:Request,res:Response) => {
  res.render('index');
})

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  console.error('--error',err);
  res.status(statusCodes.INTERNAL_SERVER_ERROR);
  res.json({message:"Oops something broke!"}).end();
});

export default app;