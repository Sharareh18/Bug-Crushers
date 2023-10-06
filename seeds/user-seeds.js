const { User } = require("../models");

const userData = [
    {
        full_name: "Josh Jacobs",
        user_name: "J_Jacobs",
        email: "j_jacobs@gmail.com",
        password: "myAwesomePassword"
    }, 
    {
        full_name: "Samantha Lee",
        user_name: "samlee",
        email: "samantha.lee@hotmail.com",
        password: "mysecretpassword123"
    },
    {
        full_name: "Michael Chen",
        user_name: "mchen",
        email: "michael.chen@email.com",
        password: "1qaz2wsx3edc4rfv"
    },
    {
        full_name: "Emily Rodriguez",
        user_name: "emrodriguez",
        email: "emily.rodriguez@email.com",
        password: "P@ssw0rd!"
    }
]

const seedUsers = () => User.bulkCreate(userData);