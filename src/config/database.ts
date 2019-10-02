import { Sequelize, Options } from 'sequelize';

const database: Options = {
  username: 'root',
  password: '',
  database: 'user',
  host: '127.0.0.1',
  dialect: 'mysql'
};

export default new Sequelize(database);