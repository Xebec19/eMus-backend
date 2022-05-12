import { nanoid } from 'nanoid';
const randomString = (limit = 10):string => {
    const random = nanoid(limit);
    return random;
}

export default randomString;