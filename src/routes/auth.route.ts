import express from 'express';
import { registerForm, loginForm } from '../controllers/auth.controllers';
import { errorHandler } from '../utils/errorHandler.middleware';

const app = express.Router();

app.route('/login')
.get(errorHandler(loginForm))
.post(errorHandler(loginForm));

app.route('/register')
.get(errorHandler(registerForm));
// .post(errorHandler())

export default app;