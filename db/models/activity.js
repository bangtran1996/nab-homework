const config = require('../config');
module.exports = (sequelize, DataTypes) => {
  const activity = sequelize.define('activity', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    ip: {
        type: DataTypes.STRING,
        field: 'ip'
    },
    location: {
        type: DataTypes.STRING,
        field: 'location'
    },
    platform: {
        type: DataTypes.STRING,
        field: 'platform'
    },
    source: {
        type: DataTypes.STRING,
        field: 'source'
    },
    fingerprint: {
        type: DataTypes.STRING,
        field: 'fingerprint'
    },
    productId: {
        type: DataTypes.BIGINT,
        field: 'product_id'
    },
    actionType: {
        type: DataTypes.STRING,
        field: 'action_type'
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
  activity.associate = function(models) {
    // associations can be defined here
  };
  return activity;
};
