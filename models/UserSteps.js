const { DataTypes, Model} = require("sequelize");
const sequelize = require("../config/connection");
class UserSteps extends Model {}
UserSteps.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        steps_for_day: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.INTEGER, //will be the unix timestamp...
            allownull: false,
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
            onDelete: "CASCADE",
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        model_name: "UserSteps"
    }
)

module.exports = UserSteps;