const User = require('./User');
const UserSteps = require("./UserSteps");
const UserDbData = require("./userDbData");

User.hasOne(UserSteps, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    //when deleting the parent table entry, must delete respective entries in associated tables
    //this sets up the cascade deletion
})

UserSteps.belongsTo(User, {
    foreignKey: "user_id",
})

//relationship between models created and now exported

module.exports = { User, UserSteps, UserDbData};
