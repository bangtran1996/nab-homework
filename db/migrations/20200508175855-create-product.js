const config = require('../config')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                field: 'id'
            },
            name: {
                type: Sequelize.TEXT,
                field: 'name',
                allowNull: false
            },
            color: {
                type: Sequelize.TEXT,
                field: 'color',
                allowNull: false
            },
            size: {
                type: Sequelize.TEXT,
                field: 'size',
                allowNull: false
            },
            price: {
                type: Sequelize.DOUBLE,
                field: 'price',
                allowNull: false,
            },
            brand_id: {
                type: Sequelize.BIGINT,
                field: 'brand_id',
                references: {
                    model: {
                        tableName: 'brand',
                        schema: 'public'
                    },
                    key: 'id'
                }
            },
            category_id: {
                type: Sequelize.BIGINT,
                field: 'category_id',
                references: {
                    model: {
                        tableName: 'category',
                        schema: 'public'
                    },
                    key: 'id'
                }
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
        return queryInterface.dropTable('product');
    }
};
