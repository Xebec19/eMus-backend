import express from 'express';
import loginForm from '../controllers/auth.controllers';
import { errorHandler } from '../utils/errorHandler.middleware';

const app = express.Router();

app.route('/login')
.get(errorHandler(loginForm))
.post(errorHandler(loginForm))

export default app;