const User = require('./User');
const UserSteps = require("./userStepsData");

UserSteps.belongsTo(User, {
    foreignKey: "user_id",
})

User.hasOne(UserSteps, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
})

module.exports = { User, userSteps };
