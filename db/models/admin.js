const config = require('../config');
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('admin', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: 'id'
        },
        username: {
            type: DataTypes.STRING,
            field: 'username',
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            field: 'password',
            allowNull: false,
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
    Admin.associate = function (models) {
        // associations can be defined here
        Admin.hasMany(models.product);
    };
    return Admin;
};
