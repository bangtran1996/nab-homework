const config = require('../config');
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'type'
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
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.product);
  };
  return Category;
};
