const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const UserProfile = require('./UserProfile');
const UserConnection = require('./UserConnection');

User.hasOne(UserProfile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

UserProfile.belongsTo(User, {
  foreignKey: 'user_id',
});

User.belongsToMany(User, {
  through: UserConnection,
  as: 'userConnections',
  foreignKey: 'user_id_1',
  otherKey: 'user_id_2',
  onDelete: 'CASCADE',
});

UserConnection.belongsTo(User, {
  foreignKey: 'user_id_1',
});

console.log("User Associations:", Object.keys(User.associations));

module.exports = {
  User,
  UserProfile,
  UserConnection,
  sequelize,
};
