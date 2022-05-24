import { nanoid } from 'nanoid';

export const randomString = (limit = 10):string => {
    const random = nanoid(limit);
    return random;
};