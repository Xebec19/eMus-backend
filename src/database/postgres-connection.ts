import { Sequelize } from 'sequelize/dist';
import env from '../environments';
import { logger } from '../utils/index.utils';

const { database, username, password, host } = env;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres'
});

const init = async () => {
  try {
    await sequelize.authenticate();
    logger.log({level:'info',message:'Postgres ::: Success'})
  } catch (error: any) {
    logger.error({message:'Postgres ::: Failed'})
  }
}

export default sequelize;