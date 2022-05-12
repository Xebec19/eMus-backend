import { PrismaClient } from '@prisma/client';
import Logger from '../utils/logger.util';

const db = new PrismaClient({
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
  })
  
db.$on('query', (e) => {
    Logger.info('Query: ' + e.query)
    Logger.info('Params: ' + e.params)
    Logger.info('Duration: ' + e.duration + 'ms')
});

export default db;