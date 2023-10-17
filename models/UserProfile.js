const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserProfile extends Model {}

UserProfile.init(
  {
    // define the columns of the user profile table
    // for example:
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_profile',
  }
);

module.exports = UserProfile;
