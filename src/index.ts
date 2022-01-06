import express, { NextFunction, Request, Response } from "express"
import auth from "./routes/auth.route"
const app = express()
const port = process.env.PORT || 3000

app.use("/public",auth);

const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
  res.status(500)
  res.render('error', { error: err });
}

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})