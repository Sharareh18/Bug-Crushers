const { UserConnection } = require("../models");
const userconnectiondata = [
    {
        user_id_1: 11,
        user_id_2: 4,
        status: "accepted"
    },
    {
        user_id_1: 2,
        user_id_2: 11,
        status: "accepted"
    },
    {
        user_id_1: 2,
        user_id_2: 9,
        status: "accepted"
    },
    {
        user_id_1: 3,
        user_id_2: 1,
        status: "accepted"
    },
    {
        user_id_1: 1,
        user_id_2: 6,
        status: "accepted"
    },
    {
        user_id_1: 5,
        user_id_2: 7,
        status: "accepted"
    },
    {
        user_id_1: 1,
        user_id_2: 8,
        status: "accepted"
    },
    {
        user_id_1: 2,
        user_id_2: 3,
        status: "accepted"
    },
    {
        user_id_1: 2,
        user_id_2: 4,
        status: "accepted"
    },
    {
        user_id_1: 2,
        user_id_2: 5,
        status: "accepted"
    },
    {
        user_id_1: 10,
        user_id_2: 6,
        status: "accepted"
    },
    {
        user_id_1: 4,
        user_id_2: 7,
        status: "accepted"
    },
    {
        user_id_1: 7,
        user_id_2: 8,
        status: "accepted"
    },
    {
        user_id_1: 3,
        user_id_2: 4,
        status: "accepted"
    },
    {
        user_id_1: 3,
        user_id_2: 5,
        status: "accepted"
    },
    {
        user_id_1: 3,
        user_id_2: 6,
        status: "accepted"
    },
    {
        user_id_1: 9,
        user_id_2: 7,
        status: "accepted"
    },
    {
        user_id_1: 11,
        user_id_2: 8,
        status: "accepted"
    },
    {
        user_id_1: 10,
        user_id_2: 9,
        status: "accepted"
    },
    {
        user_id_1: 2,
        user_id_2: 16,
        status: "accepted"
    },
    {
        user_id_1: 2,
        user_id_2: 11,
    }, 
    {
        user_id_1: 7,
        user_id_2: 12,
    },
    {
        user_id_1: 7,
        user_id_2: 13,
    },
    {
        user_id_1: 7,
        user_id_2: 14, 
    },
    {
        user_id_1: 3,
        user_id_2: 23, 
    },
    {
        user_id_1: 23,
        user_id_2: 24,
    },
    {
        user_id_1: 23,
        user_id_2: 25,
    },
    {
        user_id_1: 15,
        user_id_2: 12,
    }
]
const seedUserConnections = () => { UserConnection.bulkCreate(userconnectiondata) };
module.exports = seedUserConnections;