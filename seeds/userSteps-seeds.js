const { UserSteps } = require("../models");

userStepsData = [
    {
        step_count: 11000,
        user_id: 0
    },
    {
        step_count: 7000,
        user_id: 1
    },
    {
        step_count: 500,
        user_id: 2
    },
    {
        step_count: 19000,
        user_id: 3
    },
]

const seedUserSteps = () => UserSteps.bulkCreate(userStepsData);