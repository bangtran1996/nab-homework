const config = require('../config');
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('brand', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id',
    },
    name: {
        type: DataTypes.STRING,
        field: 'name',
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        field: 'code',
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
  Brand.associate = function(models) {
    // associations can be defined here
    Brand.hasMany(models.product);
  };
  return Brand;
};
