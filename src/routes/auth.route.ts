import express from 'express';
import { registerUser } from '../controllers/auth.controllers';
import errorHandler from '../utils/errorHandler.middleware';

const app = express.Router();

app.post('/register',
        errorHandler(registerUser)
);

export default app;