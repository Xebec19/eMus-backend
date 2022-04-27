import AppError from './abstractions/classes/app-error.class';
import prisma from './database/postgres-connection';
import app from './index';
import Logger from './utils/logger.util';
const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    Logger.log({ private: true, level: 'info', message: `app listening at http://localhost:${port}` })
});

process.on('SIGTERM',() => {
    server.close(async () => {
        console.log('Process terminated');
        await prisma.$disconnect();
    })
});

process.on('uncaughtException',(error:AppError) => {
    Logger.error(error);
    if(!error.isOperational){
      process.exit(1);
    }
  });