import express from 'express';
import { body, check } from 'express-validator';
import { registerForm, loginForm, registerUser } from '../controllers/auth.controllers';
import { errorHandler } from '../utils/errorHandler.middleware';

const app = express.Router();

app.route('/login')
    .get(errorHandler(loginForm))
    .post(errorHandler(loginForm));

app.route('/register')
    .get(errorHandler(registerForm))
    .post(body('email').isEmail().withMessage('Invalid email'),
        // check('email').custom(value => {
             
        // }),
        body('password').isLength({ min: 8 }).withMessage('Password must at least 5 characters long'), 
        errorHandler(registerUser));

export default app;