const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");
class UserConnection extends Model {}
UserConnection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id_1: { //foreign key, links back to a user
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        user_id_2: { //represents user_id_1's connection to user_id_2
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        status: {
            type: DataTypes.ENUM("pending", "accepted"),
            defaultValue: "pending"
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        model_name: "user_connection"
    }
)
module.exports = UserConnection;