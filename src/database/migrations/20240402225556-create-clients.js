
const tableName = 'clients'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      gender_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: {
            tableName: 'genders',
          },
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      telephone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};