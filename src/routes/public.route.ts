import express from 'express';
import home from '../controllers/public.controllers';
import { errorHandler } from '../utils';

export const publicRoutes = express.Router();

publicRoutes.get('/home',errorHandler(home));