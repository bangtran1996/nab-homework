const config = require('../config')
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('brand', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                field: 'id',
            },
            name: {
                type: Sequelize.STRING,
                field: 'name',
            },
            code: {
                type: Sequelize.STRING,
                unique: true,
                field: 'code',
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
        return queryInterface.dropTable('brand');
    }
};
