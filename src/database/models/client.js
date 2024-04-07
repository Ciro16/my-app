import Sequelize from 'sequelize';
import dbConnection from '@/database/connection';

const Client = dbConnection.define(
  'client',
  {
    gender_id: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    telephone: {
      type: Sequelize.INTEGER,
    },
    birth_date: {
      type: Sequelize.DATE,
    },
  },
  {
    tableName: 'clients',

    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',

    underscored: true,
    freezeTableName: true,
  }
);

export default Client