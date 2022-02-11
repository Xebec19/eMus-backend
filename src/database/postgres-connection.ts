import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import env from '../environments';
import Logger from '../utils/logger.util';

dotenv.config();

const { database, username, password, host } = env;

Logger.info(env);

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres'
});

export default sequelize;