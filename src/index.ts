import express, { NextFunction, Request, Response } from "express"
import auth from "./routes/auth.route"
import { statusCodes } from './utils/index.utils'

const app = express()

app.use(express.static('public'))

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  res.status(statusCodes.INTERNAL_SERVER_ERROR);
  res.json({message:"Oops something broke!"}).end();
});

export default app;