import express from 'express';
import registerSchema from '../abstractions/schemas/register.schema';
import { registerUser } from '../controllers/auth.controllers';
import errorHandler from '../utils/errorHandler.middleware';
import validateSchema from '../utils/validator.middleware';


const app = express.Router();

app.post('/register',
        validateSchema(registerSchema),
        errorHandler(registerUser)
);

export default app;