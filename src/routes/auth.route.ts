import express from 'express';
import { body } from 'express-validator';
import { registerUser } from '../controllers/auth.controllers';
import errorHandler from '../utils/errorHandler.middleware';

const app = express.Router();

app.post('/register', 
        body('email').isEmail().withMessage('Invalid email'),
        body('user_name').notEmpty().escape().withMessage('User name is required'),
        body('first_name').isString().withMessage('First name should be a string'),
        body('last_name').isString().withMessage('Last name should be a string'),
        body('password').isLength({ min: 8 }).withMessage('Password must at least 5 characters long'),
        errorHandler(registerUser)
        );

export default app;