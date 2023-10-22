const { UserProfile } = require("../models");
//require the index file, it has the created relationship between the two tables
const userprofiledata = [
    {
        full_name: "Josh Jacobs",
        bio: "Hey. I am Josh Jacobs and I love to walk.",
        profile_picture: "",
        step_count: 11000,
        user_id: 1
    },
    {
        full_name: "Samantha Lee",
        bio: "Hey! I am Samantha Lee and I love to walk.",
        profile_picture: "",
        step_count: 7000,
        user_id: 2
    },
    {
        full_name: "Michael Chen",
        bio: "Hey! I am Michael Chen and I love to walk.",
        profile_picture: "",
        step_count: 500,
        user_id: 3
    },
    {
        full_name: "Certified Awesome",
        bio: "Hey! I am Certified Awesome and I love to walk.",
        profile_picture: "",
        step_count: 8000,
        user_id: 4
    },
    {
        full_name: "John Skywalker",
        bio:  "Hey! I am John Skywalker and I love to walk.",
        profile_picture: "",
        step_count: 10000,
        user_id: 5
    },
    {
        full_name: "John Doe",
        bio: "Hey! I am John Doe and I love to walk.",
        profile_picture: "",
        step_count: 3000,
        user_id: 6
    },
    {
        full_name: "Amanda Miller",
        bio: "Hey! I am Amanda Miller and I love to walk.",
        profile_picture: "",
        step_count: 9000,
        user_id: 7
    },
    {
        full_name: "Ian Walking",
        bio: "Hey! I am Ian Walking and I love to walk.",
        profile_picture: "",
        step_count: 20000,
        user_id: 8
    },
    {
        full_name: "Mike Jones",
        bio: "Hey! I am Mike Jones and I love to walk.",
        profile_picture: "",
        step_count: 9420,
        user_id: 9
    },
    {
        full_name: "Jeff Bezos",
        bio: "Hey! I am Jeff Bezos and I love to walk.",
        profile_picture: "",
        step_count: 5500,
        user_id: 10
    },
    {
        full_name: "Elon Musk",
        bio: "Hey! I am Elon Musk and I love to walk.",
        profile_picture: "",
        step_count: 3330,
        user_id: 11
    },
    {
        full_name: "Albert Einstein",
        bio: "Hey! I am Albert Einstein and I love to walk.",
        profile_picture: "",
        step_count: 1000,
        user_id: 12
    },
    {
        full_name: "Michael Jordan",
        bio: "Hey! I am Michael Jordan and I love to walk.",
        profile_picture: "",
        step_count: 2000,
        user_id: 13
    },
    {
        full_name: "Lebron James",
        bio: "Hey! I am Lebron James and I love to walk.",
        profile_picture: "",
        step_count: 3000,
        user_id: 14
    },
    {
        full_name: "Dwyane Johnson",
        bio: "Hey! I am Dwyane Johnson and I love to walk.",
        profile_picture: "",
        step_count: 4000,
        user_id: 15
    },
    {
        full_name: "Mark Zuckerberg",
        bio: "Hey! I am Mark Zuckerberg and I love to walk.",
        profile_picture: "",
        step_count: 5000,
        user_id: 16
    },
    {
        full_name: "Cookie Monster",
        bio: "Hey! I am Cookie Monster and I love to walk.",
        profile_picture: "",
        step_count: 502,
        user_id: 17
    },
    {
        full_name: "Big Bird",
        bio: "Hey! I am Big Bird and I love to walk.",
        profile_picture: "",
        step_count: 1934,
        user_id: 18
    },
    {
        full_name: "Oscar the Grouch",
        bio: "Hey! I am Oscar the Grouch and I love to walk.",
        profile_picture: "",
        step_count: 400,
        user_id: 19
    },
    {
        full_name: "Peter Parker",
        bio: "Hey! I am Peter Parker and I love to walk.",
        profile_picture: "",
        step_count: 9271,
        user_id: 20
    },
    {
        full_name: "Michael Simpson",
        bio: "Hey! I am Michael Simpson and I love to walk.",
        profile_picture: "",
        step_count: 1378,
        user_id: 21
    },
    {
        full_name: "Jeremy Piven",
        bio: "Hey! I am xwing and I love to walk.",
        profile_picture: "",
        step_count: 6932,
        user_id: 22
    },
    {
        full_name: "Ricky Bobby",
        bio: "Hey! I am Ricky Bobby and I love to walk.",
        profile_picture: "",
        step_count: 1239,
        user_id: 23
    },
    {
        full_name: "Clark Williams",
        profile_picture: "",
        bio: "Hey! I am Clark Williams and I love to walk.",
        step_count: 6583,
        user_id: 24
    },
    {
        full_name: "Nathaniel Tabeeo",
        bio: "Hey! I am Nathaniel Tabeeo and I love to walk.",
        profile_picture: "",
        step_count: 4367,
        user_id: 25
    }
];
const seedUserProfiles = () => UserProfile.bulkCreate(userprofiledata);
module.exports = seedUserProfiles;