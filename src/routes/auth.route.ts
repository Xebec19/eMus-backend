import express from 'express';
import loginForm from '../controllers/auth.controllers';
import { errorHandler } from '../utils/errorHandler.middleware';

const router = express.Router();

router.get('/login',errorHandler(loginForm));

export default router;