import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import Logger from '../utils/logger.util';
/* eslint-disable import/no-mutable-exports */
let db = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  });
  
db.$on('query', (e) => {
    Logger.info(`Query: ${  e.query}`);
    Logger.info(`Params: ${  e.params}`);
    Logger.info(`Duration: ${  e.duration  }ms`);
});


if(process.env.NODE_ENV === 'test'){
  jest.mock('./client', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
  }));
  // beforeEach(() => {
  //   mockReset(dbMock)
  // })
  db = db as unknown as DeepMockProxy<PrismaClient>;
}
export default db;