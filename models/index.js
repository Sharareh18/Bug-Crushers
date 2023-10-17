// imports the Sequelize library
const Sequelize = require('sequelize');

//imports the database connection config
const sequelize = require('../config/connection');

// imports the User, UserProfile, and UserConnection models
const User = require('./models');

const UserProfile = require('./UserProfile');
const UserConnection = require('./UserConnection');

// defines relationships between the models
User.hasOne(UserProfile, {
    foreignKey: 'user_id', // connects a user to their user profile
    onDelete: 'CASCADE', // if a user is deleted, their profile is deleted
});

UserProfile.belongsTo(User, {
    foreignKey: 'user_id', // connects a user profile to its user
});

// optionally, defines relationships for the UserConnection model
User.belongsToMany(User, {
    through: UserConnection, // represents connections between users
    as: 'userConnections',
    foreignKey: 'user_id_1', // identifies the first user in a connection
    otherKey: 'user_id_2', // identifies the second user in a connection
    onDelete: 'CASCADE', // If a user is deleted, their connections are deleted
});

UserConnection.belongsTo(User, {
    foreignKey: 'user_id_1', // connects a connection to its first user
});

// exports the models & the Sequelize instance
module.exports = {
    User,
    UserProfile,
    UserConnection,
    sequelize, // this is the connection instance for use in other parts of the app
};





