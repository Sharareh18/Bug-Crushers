const { UserSteps } = require("../models");
//require the index file, it has the created relationship between the two tables

userStepsData = [
    {
        step_count: 11000,
        user_id: 1 //id's start at 1...., took forever to find this error
    },
    {
        step_count: 7000,
        user_id: 2
    },
    {
        step_count: 500,
        user_id: 3
    },
    {
        step_count: 19000,
        user_id: 4
    },
]

const seedUserSteps = () => UserSteps.bulkCreate(userStepsData);

module.exports = seedUserSteps;