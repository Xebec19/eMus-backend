import express from 'express';
import login from '../controllers/auth.controllers';
import errorHandler from '../utils/errorHandler.middleware';

const router = express.Router();

router.get('/login',errorHandler(login));

export default router;