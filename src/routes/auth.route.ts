import express from 'express';
import { loginSchema, registerSchema } from '../abstractions/schemas/index';
import { loginUser, registerUser } from '../controllers/auth.controllers';
import { errorHandler, validateSchema } from '../utils';

export const authRoutes = express.Router();

authRoutes.post('/register',
        validateSchema(registerSchema),
        errorHandler(registerUser)
);

authRoutes.post('/login',
        validateSchema(loginSchema),
        errorHandler(loginUser)
);