const { UserSteps } = require("../models");
//require the index file, it has the created relationship between the two tables
const userstepsedata = [
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 1
    },
    {
        steps_for_day: 19000,
        date: 1698314781,
        user_id: 2,
    },
    {
        steps_for_day: 19000,
        date: 1698401181,
        user_id: 2,
    },
    {
        steps_for_day: 19000,
        date: 1698487581,
        user_id: 2,
    },
    {
        steps_for_day: 12000,
        date: 1698573981,
        user_id: 2
    },
    {
        steps_for_day: 22000,
        date: 1698660381,
        user_id: 2
    },
    {
        steps_for_day: 19000,
        date: 1698746781,
        user_id: 2,
    },
    {
        steps_for_day: 12000,
        date: 1698726567,
        user_id: 3
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 4
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 5
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 6
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 7
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 8
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 9
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 10
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 11
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 13
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 14
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 15
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 16
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 17
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 18
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 19
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 20
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 21
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 22
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 23
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 24
    },
    {
        steps_for_day: 12000,
        date: 1699065524,
        user_id: 25
    }
];
const seedUserSteps = () => UserSteps.bulkCreate(userstepsedata);
module.exports = seedUserSteps;