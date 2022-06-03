import express from 'express';
import { createStoreSchema } from '../abstractions/schemas';
import { createStore } from '../controllers/store.controllers';
import { errorHandler, validateSchema } from '../utils';
import { checkToken } from '../utils/checkToken.middleware';

export const storeRoutes = express.Router();

storeRoutes.post('/create',
    validateSchema(createStoreSchema),
    errorHandler(checkToken),
    errorHandler(createStore)
);