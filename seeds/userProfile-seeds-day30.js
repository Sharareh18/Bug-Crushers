const { UserProfile } = require("../models");
//require the index file, it has the created relationship between the two tables
const userprofiledata = [
    {
        full_name: "Josh Jacobs",
        bio: "Hey. I am Josh Jacobs and I love to walk.",
        profile_picture: "",
        challenge: "challenge one",
        step_count: 287100,
        user_id: 1
    },
    {
        full_name: "Samantha Lee",
        bio: "Yo! I'm Samantha Lee, stepping up my game and stepping towards a healthier version of me. Let's motivate each other! 🏃‍♀️ #StepChallengeAccepted",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 160000,
        user_id: 2
    },
    {
        full_name: "Michael Chen",
        bio: "Greetings! I'm Michael Chen, on a mission to conquer step goals. Striding towards a healthier me, one step at a time. Join my journey! 🌟 #StepWarrior",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 149400,
        user_id: 3
    },
    {
        full_name: "Nolan Archer",
        bio: "Hi, it's Nolan Archer, stepping into a new chapter of fitness. Embracing the challenge and counting steps like there's no tomorrow! 👟 #StepIntoGreatness",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 120900,
        user_id: 4
    },
    {
        full_name: "John Skywalker",
        bio:  "What's up? I'm John Skywalker, stepping into a world of wellness. Let's make every step count and crush our fitness goals! 💪 #StepStrong",
        profile_picture: "",
        challenge: "challenge one",
        step_count: 220720,
        user_id: 5
    },
    {
        full_name: "Ava Green",
        bio: "Salutations! I'm Ava Green, chasing steps and chasing dreams. Join me in this fitness adventure! Together, we can step into a better future. 🌈 #StepDreams",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 132000,
        user_id: 6
    },
    {
        full_name: "Amanda Miller",
        bio: "Hi there! I'm Amanda Miller, embracing the rhythm of life one step at a time. Let's dance through this step challenge together! 💃 #StepDancer",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 190470,
        user_id: 7
    },
    {
        full_name: "Ian Walking",
        bio: "Yo, I'm Ian Walking, turning pavement into my personal gym. Step by step, I'm sculpting a stronger me. Join the fitness party! 💪 #StepSculptor",
        profile_picture: "",
        challenge: "challenge one",
        step_count: 249900,
        user_id: 8
    },
    {
        full_name: "Isabella Everly",
        bio: "Hello, I'm Isabella Everly, strolling through the journey of self-discovery. Every step is a revelation. Come walk with me! 🚶‍♀️ #StepReveler",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 152040,
        user_id: 9
    },
    {
        full_name: "Jasper Cruz",
        bio: "Hello, I'm Jasper Cruz, navigating the labyrinth of wellness. Join my squad, and let's conquer the challenges together! 🗺️ #StepNavigator",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 123900,
        user_id: 10
    },
    {
        full_name: "Nova Emberlyn",
        bio: "Hey, it's Nova Emberlyn, stepping into a world of positivity. Join my tribe, and let's radiate good vibes with every stride! 😊 #StepOptimist",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 127000,
        user_id: 11
    },
    {
        full_name: "Willow Quinn",
        bio: "Hey! I am Willow Quinn and I love to walk.",
        profile_picture: "",
        challenge: "challenge one",
        step_count: 141500,
        user_id: 12
    },
    {
        full_name: "Milo Sterling",
        bio: "Hey, I'm Milo Sterling, journeying through the landscapes of fitness. Every step is a brushstroke on the canvas of well-being. Join me in this masterpiece! 🎨 #StepArtist",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 90450,
        user_id: 13
    },
    {
        full_name: "Silas Orion",
        bio: "Greetings, I'm Silas Orion, trekking through the terrain of fitness. Every step is a victory, and I'm building an empire of well-being. Join my kingdom! 👑 #StepConqueror",
        profile_picture: "",
        challenge: "challenge one",
        step_count: 258210,
        user_id: 14
    },
    {
        full_name: "Dwyane Johnson",
        bio: "Hey there, it's Dwyane Johnson, scripting a tale of strength and vitality. Join my story, and let's write a bestseller of well-being! 📚 #StepAuthor",
        profile_picture: "",
        challenge: "challenge one",
        step_count: 242100,
        user_id: 15
    },
    {
        full_name: "Gavin Bennett",
        bio: "Hi, I'm Gavin Bennett, navigating the waves of wellness. Join my crew, and let's set sail towards a sea of good health! ⛵ #StepNavigator",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 90500,
        user_id: 16
    },
    {
        full_name: "Leo Everest",
        bio: "Greetings, I'm Leo Everest, marching to the beat of wellness. Join my parade, and let's celebrate the rhythm of a healthier life! 🥁 #StepMarcher",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 174900,
        user_id: 17
    },
    {
        full_name: "Finnian Ash",
        bio: "Hello, I'm Finnian Ash, wandering through the landscapes of fitness. Join my journey and let's explore the trails of well-being together! 🌳 Explorer of a healthier life.",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 230050,
        user_id: 18
    },
    {
        full_name: "Harper Wren",
        bio: "Hey, it's Harper Wren, striding through the symphony of fitness. Join my orchestra and let's compose a melody of well-being together! 🎻 Composer of a healthier life.",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 155200,
        user_id: 19
    },
    {
        full_name: "Malik Johnson",
        bio: "What's up? I'm Mason Walker, building the fortress of fitness brick by brick. Join my construction crew, and let's erect a stronghold of health! 🏰 #StepBuilder",
        profile_picture: "",
        challenge: "challenge one",
        step_count: 174300,
        user_id: 20
    },
    {
        full_name: "Michael Simpson",
        bio: "Hey! I am Michael Simpson and I love to walk.",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 196740,
        user_id: 21
    },
    {
        full_name: "Jeremy Piven",
        bio: "Hey! I am Jeremy Piven. I have always love to walk and will continue to do so for good health. Let's keep walking!",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 175000,
        user_id: 22
    },
    {
        full_name: "Ricky Bobby",
        bio: "What's up? I'm Ricky Bobby, stepping into a world of possibilities. Striving for success, one step at a time. Join me on this epic journey! 🌐 #StepSeeker",
        profile_picture: "",
        challenge: "challenge three",
        step_count: 83670,
        user_id: 23
    },
    {
        full_name: "Clark Williams",
        profile_picture: "",
        bio: "Hey! Clark Williams here, and I love to walk more than anything else. It keeps my mind clear and is the best way to recenter yourself. Walking is the best!",
        challenge: "challenge one",
        step_count: 169058,
        user_id: 24
    },
    {
        full_name: "Nathaniel Tabeeo",
        bio: "What's up, I am Nathaniel Tabeeo... I have been walking for forever. It's the best way to exercise!",
        profile_picture: "",
        challenge: "challenge two",
        step_count: 141470,
        user_id: 25
    }
];
const seedUserProfiles = () => UserProfile.bulkCreate(userprofiledata);
module.exports = seedUserProfiles;