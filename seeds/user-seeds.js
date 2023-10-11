const { User } = require("../models");
//require the index file, it has the created relationship between the two tables

const userdata = [
    {
        first_name: "Josh",
        last_name: "Jacobs",
        user_name: "JJacobs",
        email: "j_jacobs@gmail.com",
        password: "myAwesomePassword",
    }, 
    {
        first_name: "Samantha",
        last_name: "Lee",
        user_name: "samlee",
        email: "samantha.lee@hotmail.com",
        password: "mysecretpassword123",
    },
    {
        first_name: "Michael",
        last_name: "Chen",
        user_name: "mchen",
        email: "michael.chen@email.com",
        password: "1qaz2wsx3edc4rfv",
    },
    {
        first_name: "Emily",
        last_name: "Rodriguez",
        user_name: "emrodriguez",
        email: "emily.rodriguez@email.com",
        password: "P@ssw0rd!",
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;