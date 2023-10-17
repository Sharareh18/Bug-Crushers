const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserConnection extends Model {}

UserConnection.init(
  {
    // define the columns of the user connection table
    // for example:
    user_id_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    user_id_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_connection',
  }
);

module.exports = UserConnection;
