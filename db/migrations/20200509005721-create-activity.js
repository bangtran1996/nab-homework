const config = require('../config')
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('activity', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                field: 'id'
            },
            ip: {
                type: Sequelize.STRING,
                field: 'ip'
            },
            location: {
                type: Sequelize.STRING,
                field: 'location'
            },
            platform: {
                type: Sequelize.STRING,
                field: 'platform'
            },
            source: {
                type: Sequelize.STRING,
                field: 'source'
            },
            fingerprint: {
                type: Sequelize.STRING,
                field: 'fingerprint'
            },
            productId: {
                type: Sequelize.BIGINT,
                field: 'product_id'
            },
            actionType: {
                type: Sequelize.STRING,
                field: 'action_type'
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
        return queryInterface.dropTable('activity');
    }
};
