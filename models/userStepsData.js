const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class UserSteps extends Model {}

UserSteps.init (
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        step_count: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        //date_created: ... will have this property because timestamps is set to true
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            },
            onDelete: "CASCADE",
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_steps',
    }
);

// the model for user steps that the users input 

//needs sequelize and bcrypt

//gonna need a class called step data

// the steps that the user inputs

//needs username, steps, date created