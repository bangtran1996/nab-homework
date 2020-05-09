const config = require('../config');
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: 'id'
        },
        name: {
            type: DataTypes.TEXT,
            field: 'name',
            allowNull: false
        },
        color: {
            type: DataTypes.TEXT,
            field: 'color',
            allowNull: false
        },
        size: {
            type: DataTypes.TEXT,
            field: 'size',
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            field: 'price',
            allowNull: false,
        },
        brand_id: {
            type: DataTypes.BIGINT,
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
            type: DataTypes.BIGINT,
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
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            field: 'updated_at',
            type: DataTypes.DATE
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE
        }
    }, config);
    Product.associate = function (models) {
        // associations can be defined here
        Product.belongsTo(models.brand, { foreignKey: 'brand_id' });
        Product.belongsTo(models.category, { foreignKey: 'category_id' });
    };
    return Product;
};
