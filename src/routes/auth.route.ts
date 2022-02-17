import express from 'express';
import { body } from 'express-validator';
import { registerUser } from '../controllers/auth.controllers';
import { errorHandler } from '../utils/errorHandler.middleware';

const app = express.Router();

app.post('/register', body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 8 }).withMessage('Password must at least 5 characters long'), 
        errorHandler(registerUser)
        );

export default app;