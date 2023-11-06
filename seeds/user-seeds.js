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
        username: "ArcherNolan89",
        email: "ArcherNolan89@email.com",
        password: "P@ssw0rd!",
    },
    {
        username: "jskywalker",
        email: "jskywalker@yahoo.com",
        password: "newPassword123",
    },
    {
        username: "EmeraldAva",
        email: "EmeraldAva@walking.com",
        password: "userPassword123",
    },
    {
        username: "Manda_Maze",
        email: "amilliondollars@bing.com",
        password: "amillion123",
    },
    {
        username: "iamwalking",
        email: "iamwalkingtowork@gmail.com",
        password: "walking2work",
    },
    {
        username: "BellaEver",
        email: "catslovedogs@email.com",
        password: "catsanddogs",
    },
    {
        username: "CruzJasper",
        email: "CruzJasper@amazon.com",
        password: "CruzJasper",
    },
    {
        username: "NovaEmber",
        email: "NovaEmber@gmail.com",
        password: "tesla123",
    },
    {
        username: "QuillWillow",
        email: "QuillWillow@gmail.com",
        password: "emc2",
    },
    {
        username: "SterlingMilo",
        email: "SterlingMilo@gmail.com",
        password: "airjordan",
    },
    {
        username: "CosmicSilas",
        email: "CosmicSilas@king.com",
        password: "lbj23",
    },
    {
        username: "dwaynejohnson",
        email: "therock@gmail.com",
        password: "rock123",
    },
    {
        username: "GavBennett23",
        email: "GavBennett23@facebook.com",
        password: "facebook123",
    },
    {
        username: "EverestExplorer",
        email: "EverestExplorer@cookie.com",
        password: "mmmcookies",
    },
    {
        username: "InfernoFinn",
        email: "InfernoFinn@gmail.com",
        password: "biggestbird",
    },
    {
        username: "WrenHarmony",
        email: "WrenHarmony@gmail.com",
        password: "grouch123",
    },
    {
        username: "MagneticMalik",
        email: "MagneticMalik@gmail.com",
        password: "spideysense",
    },
    {
        username: "EpicMike",
        email: "EpicMike@gmail.com",
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
        username: "ClarktheGreat",
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