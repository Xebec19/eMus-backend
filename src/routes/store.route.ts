import express from 'express';
import { createStoreSchema } from '../abstractions/schemas';
import { errorHandler, validateSchema } from '../utils';

export const storeRoutes = express.Router();

storeRoutes.post('/create',
    validateSchema(createStoreSchema),
    errorHandler(createStore)
);