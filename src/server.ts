import AppError from './abstractions/classes/app-error.class';
import prisma from './database/prisma-connection';
import app from './index';
import { Logger } from './utils';
const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    Logger.log({ private: true, level: 'info', message: `app listening at http://localhost:${port}` })
});

process.on('SIGTERM',() => {
    server.close(async () => {
        Logger.error('Process terminated');
        await prisma.$disconnect();
    })
});

process.on('uncaughtException',(error:AppError) => {
    Logger.error(error);
    if(!error.isOperational){
      process.exit(1);
    }
  });