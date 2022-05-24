import express from 'express';
import home from '../controllers/public.controllers';
import { errorHandler } from '../utils';

const router = express.Router();

router.get('/home',errorHandler(home));

export default router;