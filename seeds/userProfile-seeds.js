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
]
const seedUserProfiles = () => UserProfile.bulkCreate(userprofiledata);
module.exports = seedUserProfiles;