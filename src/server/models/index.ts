import { Sequelize, } from 'sequelize-typescript';
import config from '../config/config';

const sequelize = new Sequelize({
  database: config.db.dbName,
  host: config.db.dbHost,
  dialect: 'postgres',
  username: config.db.userName,
  password: config.db.password,
  models: [],
});

export const connectDb = async (): Promise<void> => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log('Connection to  DB has been established successfully.');
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
