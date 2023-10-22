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
    },
    {
        username: "alberteinstein",
        email: "eismcsquared@gmail.com",
        password: "emc2",
    },
    {
        username: "michaeljordan",
        email: "airjordan@gmail.com",
        password: "airjordan",
    },
    {
        username: "lebronjames",
        email: "lbj@king.com",
        password: "lbj23",
    },
    {
        username: "dwaynejohnson",
        email: "therock@gmail.com",
        password: "rock123",
    },
    {
        username: "markzuckerberg",
        email: "facebook@facebook.com",
        password: "facebook123",
    },
    {
        username: "cookiemonster",
        email: "cookiemonster@cookie.com",
        password: "mmmcookies",
    },
    {
        username: "bigbird",
        email: "yellowbird@gmail.com",
        password: "biggestbird",
    },
    {
        username: "oscarthegrouch",
        email: "trashcan@gmail.com",
        password: "grouch123",
    },
    {
        username: "peterparker",
        email: "spiderman@gmail.com",
        password: "spideysense",
    },
    {
        username: "yodamasterofthejedi",
        email: "theforce@gmail.com",
        password: "maytheforcebewithyou",
    },
    {
        username: "xwing",
        email: "coolspaceship@gmail.com",
        password: "spaceship123",
    },
    {
        username: "oodlesofnoodles",
        email: "oodles@noodles.com",
        password: "noodlesyum",
    },
    {
        username: "clakenthegreat",
        email: "clakensemail@gmail.com",
        password: "clakenthegreatest",
    },
    {
        username: "nathaniel",
        email: "starwarsiscool@gmail.com",
        password: "starwars123",
    }
]
const seedUsers = () => User.bulkCreate(userdata);
module.exports = seedUsers;