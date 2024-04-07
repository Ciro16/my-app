
const tableName = 'employees'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      center_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'centers',
          },
          key: 'id',
        },
        onDelete: 'CASCADE',
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
      },
      birth_date: {
        type: Sequelize.DATEONLY,
      },
      job_title: {
        type: Sequelize.STRING(50),
      },

      created_at: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};