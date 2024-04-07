import Sequelize from 'sequelize';
import dbConnection from '@/database/connection';

import Client from './client';
import Employee from './employee';

const Gender = dbConnection.define(
  'gender',
  {
    gender: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: 'genders',

    timestamps: false,

    underscored: true,
    freezeTableName: true,
  }
);

Gender.hasMany(Client)
Client.belongsTo(Gender)

Gender.hasMany(Employee)
Employee.belongsTo(Gender)

export default Gender;