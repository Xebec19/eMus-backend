import express from 'express';
import { loginSchema, registerSchema } from '../abstractions/schemas/index';
import { loginUser, registerUser } from '../controllers/auth.controllers';
import { errorHandler, validateSchema } from '../utils';

const app = express.Router();

app.post('/register',
        validateSchema(registerSchema),
        errorHandler(registerUser)
);

app.post('/login',
        validateSchema(loginSchema),
        errorHandler(loginUser)
        );

export default app;