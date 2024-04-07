import { Sequelize } from "sequelize";
import dbConfig from "./db_config.mjs";

const currentEnv = {
  development: new Sequelize(dbConfig.development),
  test: new Sequelize(dbConfig.test),
  production: new Sequelize(dbConfig.production),
}

const dbConnection = currentEnv[process.env.APP_ENV]

export default dbConnection;
