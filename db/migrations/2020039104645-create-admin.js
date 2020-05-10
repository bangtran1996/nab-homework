const config = require('../config');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admin', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            field: 'id'
        },
        username: {
            type: Sequelize.STRING,
            field: 'username',
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            field: 'password',
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            field: 'created_at',
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            field: 'updated_at',
            type: Sequelize.DATE
        },
        deletedAt: {
            field: 'deleted_at',
            type: Sequelize.DATE
        }
    }, config);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admin');
  }
};
