import Sequelize from 'sequelize';
import User from '../app/models/User';
import configDatabase from '../config/database';
import Files from '../app/models/File';

const models = [User, Files];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
