const { User } = require("../models");
//require the index file, it has the created relationship between the two tables
const userdata = [
    {
        username: "JJacobs",
        email: "j_jacobs@gmail.com",
        password: "myAwesomePassword",
    },
    {
        username: "samlee",
        email: "samantha.lee@hotmail.com",
        password: "mysecretpassword123",
    },
    {
        username: "mchen",
        email: "michael.chen@email.com",
        password: "1qaz2wsx3edc4rfv",
    },
    {
        username: "certifiedawesome",
        email: "certifiedawesome@email.com",
        password: "P@ssw0rd!",
    },
    {
        username: "jskywalker",
        email: "jskywalker@yahoo.com",
        password: "newPassword123",
    },
    {
        username: "jdoe",
        email: "jdoe45@walking.com",
        password: "userPassword123",
    },
    {
        username: "amiller",
        email: "amilliondollars@bing.com",
        password: "amillion123",
    },
    {
        username: "iamwalking",
        email: "iamwalkingtowork@gmail.com",
        password: "walking2work",
    },
    {
        username: "mikejones",
        email: "catslovedogs@email.com",
        password: "catsanddogs",
    },
    {
        username: "jeffbezos",
        email: "amazon@amazon.com",
        password: "buyfromamazon",
    },
    {
        username: "elonmusk",
        email: "elonmusk@gmail.com",
        password: "tesla123",
    }
]
const seedUsers = () => User.bulkCreate(userdata);
module.exports = seedUsers;