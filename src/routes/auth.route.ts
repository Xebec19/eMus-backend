import express from 'express';
import login from '../controllers/auth.controllers';
import { errorHandler } from '../utils/index.utils';

const router = express.Router();

router.post('/login',errorHandler(login));

export default router;