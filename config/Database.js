import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'abk',
  user: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
});