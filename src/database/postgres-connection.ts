import { Sequelize } from 'sequelize/dist';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
  });
  