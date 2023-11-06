const { UserProfile } = require("../models");
//require the index file, it has the created relationship between the two tables
const userprofiledata = [
    {
        full_name: "Josh Jacobs",
        bio: "Hey. I am Josh Jacobs and I love to walk.",
        profile_picture: "https://miro.medium.com/v2/resize:fit:960/0*mQDq7K37Lnh-066J.jpg",
        challenge: "Challenge One",
        current_steps: 8000,
        user_id: 1
    },
    {
        full_name: "Samantha Lee",
        bio: "Yo! I'm Samantha Lee, stepping up my game and stepping towards a healthier version of me. Let's motivate each other! 🏃‍♀️ #StepChallengeAccepted",
        profile_picture: "https://i.insider.com/5c79a8cfeb3ce837863155f5?width=1000&format=jpeg&auto=webp",
        challenge: "Challenge Two",
        current_steps: 7000,
        user_id: 2
    },
    {
        full_name: "Michael Chen",
        bio: "Greetings! I'm Michael Chen, on a mission to conquer step goals. Striding towards a healthier me, one step at a time. Join my journey! 🌟 #StepWarrior",
        profile_picture: "https://miro.medium.com/v2/resize:fit:1400/1*TzaiFDmkiEkOxNU7eG43pw.jpeg",
        challenge: "Challenge Two",
        current_steps: 3000,
        user_id: 3
    },
    {
        full_name: "Nolan Archer",
        bio: "Hi, it's Nolan Archer, stepping into a new chapter of fitness. Embracing the challenge and counting steps like there's no tomorrow! 👟 #StepIntoGreatness",
        profile_picture: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
        challenge: "Challenge Two",
        current_steps: 4000,
        user_id: 4
    },
    {
        full_name: "John Skywalker",
        bio:  "What's up? I'm John Skywalker, stepping into a world of wellness. Let's make every step count and crush our fitness goals! 💪 #StepStrong",
        profile_picture: "https://randomwordgenerator.com/img/picture-generator/chair-1840011_640.jpg",
        challenge: "Challenge One",
        current_steps: 8000,
        user_id: 5
    },
    {
        full_name: "Ava Green",
        bio: "Salutations! I'm Ava Green, chasing steps and chasing dreams. Join me in this fitness adventure! Together, we can step into a better future. 🌈 #StepDreams",
        profile_picture: "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png",
        challenge: "Challenge Three",
        current_steps: 3000,
        user_id: 6
    },
    {
        full_name: "Amanda Miller",
        bio: "Hi there! I'm Amanda Miller, embracing the rhythm of life one step at a time. Let's dance through this step challenge together! 💃 #StepDancer",
        profile_picture: "https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg",
        challenge: "Challenge Two",
        current_steps: 9000,
        user_id: 7
    },
    {
        full_name: "Ian Walking",
        bio: "Yo, I'm Ian Walking, turning pavement into my personal gym. Step by step, I'm sculpting a stronger me. Join the fitness party! 💪 #StepSculptor",
        profile_picture: "https://sm.ign.com/ign_nordic/review/l/lost-in-ra/lost-in-random-review_9hhv.jpg",
        challenge: "Challenge One",
        current_steps: 14500,
        user_id: 8
    },
    {
        full_name: "Isabella Everly",
        bio: "Hello, I'm Isabella Everly, strolling through the journey of self-discovery. Every step is a revelation. Come walk with me! 🚶‍♀️ #StepReveler",
        profile_picture: "https://i.pinimg.com/originals/cc/61/e0/cc61e0afec490d5a8e59ba330c67ab2a.jpg",
        challenge: "Challenge Three",
        current_steps: 9420,
        user_id: 9
    },
    {
        full_name: "Jasper Cruz",
        bio: "Hello, I'm Jasper Cruz, navigating the labyrinth of wellness. Join my squad, and let's conquer the challenges together! 🗺️ #StepNavigator",
        profile_picture: "https://previews.123rf.com/images/schan/schan1410/schan141000597/32743599-water-drops-on-glass.jpg",
        challenge: "Challenge Three",
        current_steps: 5500,
        user_id: 10
    },
    {
        full_name: "Nova Emberlyn",
        bio: "Hey, it's Nova Emberlyn, stepping into a world of positivity. Join my tribe, and let's radiate good vibes with every stride! 😊 #StepOptimist",
        profile_picture: "https://facts.net/wp-content/uploads/2020/01/close-up-photography-of-cat-1183434.jpg",
        challenge: "Challenge Two",
        current_steps: 3330,
        user_id: 11
    },
    {
        full_name: "Willow Quinn",
        bio: "Hey! I am Willow Quinn and I love to walk.",
        profile_picture: "https://i.pinimg.com/736x/a1/c2/be/a1c2be6c013cb288221cd1675021dbd8.jpg",
        challenge: "Challenge One",
        current_steps: 1000,
        user_id: 12
    },
    {
        full_name: "Milo Sterling",
        bio: "Hey, I'm Milo Sterling, journeying through the landscapes of fitness. Every step is a brushstroke on the canvas of well-being. Join me in this masterpiece! 🎨 #StepArtist",
        profile_picture: "https://static.vecteezy.com/system/resources/svgs/000/164/896/original/0892159f-4a22-4bba-89f2-f27c17e05f10.svg?1509125844",
        challenge: "Challenge Three",
        current_steps: 2000,
        user_id: 13
    },
    {
        full_name: "Silas Orion",
        bio: "Greetings, I'm Silas Orion, trekking through the terrain of fitness. Every step is a victory, and I'm building an empire of well-being. Join my kingdom! 👑 #StepConqueror",
        profile_picture: "https://conetix.com.au/wp-content/uploads/2023/05/dns-prsd-attack-cover.png",
        challenge: "Challenge One",
        current_steps: 3000,
        user_id: 14
    },
    {
        full_name: "Dwyane Johnson",
        bio: "Hey there, it's Dwyane Johnson, scripting a tale of strength and vitality. Join my story, and let's write a bestseller of well-being! 📚 #StepAuthor",
        profile_picture: "https://machinelearningmastery.com/wp-content/uploads/2018/07/thomas-lipke-oIuDXlOJSiE-unsplash-scaled.jpg",
        challenge: "Challenge One",
        current_steps: 4000,
        user_id: 15
    },
    {
        full_name: "Gavin Bennett",
        bio: "Hi, I'm Gavin Bennett, navigating the waves of wellness. Join my crew, and let's set sail towards a sea of good health! ⛵ #StepNavigator",
        profile_picture: "https://www.toyark.com/wp-content/uploads/2023/06/Sentinel-Miles-Spider-Man-51-800x450.jpg",
        challenge: "Challenge Three",
        current_steps: 5000,
        user_id: 16
    },
    {
        full_name: "Leo Everest",
        bio: "Greetings, I'm Leo Everest, marching to the beat of wellness. Join my parade, and let's celebrate the rhythm of a healthier life! 🥁 #StepMarcher",
        profile_picture: "https://spin.atomicobject.com/wp-content/uploads/image-1-1024x768.jpeg",
        challenge: "Challenge Two",
        current_steps: 502,
        user_id: 17
    },
    {
        full_name: "Finnian Ash",
        bio: "Hello, I'm Finnian Ash, wandering through the landscapes of fitness. Join my journey and let's explore the trails of well-being together! 🌳 Explorer of a healthier life.",
        profile_picture: "https://media.wired.com/photos/6424d72765d5de59f2a35f77/master/w_2560%2Cc_limit/100-People-Could-Be-Your-Landlord-Business-1264411425.jpg",
        challenge: "Challenge Two",
        current_steps: 1934,
        user_id: 18
    },
    {
        full_name: "Harper Wren",
        bio: "Hey, it's Harper Wren, striding through the symphony of fitness. Join my orchestra and let's compose a melody of well-being together! 🎻 Composer of a healthier life.",
        profile_picture: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
        challenge: "Challenge Three",
        current_steps: 400,
        user_id: 19
    },
    {
        full_name: "Malik Johnson",
        bio: "What's up? I'm Mason Walker, building the fortress of fitness brick by brick. Join my construction crew, and let's erect a stronghold of health! 🏰 #StepBuilder",
        profile_picture: "https://images4.fanpop.com/image/photos/22900000/So-Cool-random-22921826-500-333.jpg",
        challenge: "Challenge One",
        current_steps: 5271,
        user_id: 20
    },
    {
        full_name: "Michael Simpson",
        bio: "Hey! I am Michael Simpson and I love to walk.",
        profile_picture: "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
        challenge: "Challenge Two",
        current_steps: 1378,
        user_id: 21
    },
    {
        full_name: "Jeremy Piven",
        bio: "Hey! I am Jeremy Piven. I have always love to walk and will continue to do so for good health. Let's keep walking!",
        profile_picture: "https://i0.wp.com/www.geardiary.com/wp-content/uploads/2011/09/Nyan-Cat-700x437.png?resize=700%2C437",
        challenge: "Challenge Three",
        current_steps: 6932,
        user_id: 22
    },
    {
        full_name: "Ricky Bobby",
        bio: "What's up? I'm Ricky Bobby, stepping into a world of possibilities. Striving for success, one step at a time. Join me on this epic journey! 🌐 #StepSeeker",
        profile_picture: "https://hips.hearstapps.com/hmg-prod/images/mclaren-720s-gt3-1549636513.jpg",
        challenge: "Challenge Three",
        current_steps: 1239,
        user_id: 23
    },
    {
        full_name: "Clark Williams",
        profile_picture: "https://media.istockphoto.com/id/1392898737/vector/abstract-horizontal-background-with-colorful-waves.jpg?s=612x612&w=0&k=20&c=xxRagBOWElqfzxPho893QoNmB1HnAw9VM-UHkQhtih4=",
        bio: "Hey! Clark Williams here, and I love to walk more than anything else. It keeps my mind clear and is the best way to recenter yourself. Walking is the best!",
        challenge: "Challenge One",
        current_steps: 6583,
        user_id: 24
    },
    {
        full_name: "Nathaniel Tabeeo",
        bio: "What's up, I am Nathaniel Tabeeo... I have been walking for forever. It's the best way to exercise!",
        profile_picture: "https://i.pinimg.com/originals/a9/de/8d/a9de8d95b7c7e13b9ea15ab5afb1d4c5.jpg",
        challenge: "Challenge Two",
        current_steps: 4367,
        user_id: 25
    }
];
const seedUserProfiles = () => UserProfile.bulkCreate(userprofiledata);
module.exports = seedUserProfiles;