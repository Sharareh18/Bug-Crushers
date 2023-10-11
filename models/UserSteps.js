const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserSteps extends Model {}

UserSteps.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        step_count: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        //date_created included with timestamps
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
            onDelete: "CASCADE",
            //put the foreign key as cascade, so that the entire entry is deleted when the parent table entry is deleted
            //this allows for the cascade deletion
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

module.exports = UserSteps;