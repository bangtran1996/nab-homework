const config = require('../config')
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('category', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                field: 'id',
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                field: 'name',
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'type'
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
        }, { ...config });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('category');
    }
};
