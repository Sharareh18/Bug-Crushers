const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds")
const seedUserProfilesDayOne = require("./userProfile-seeds-day1");
const seedUserConnections = require("./UserConnection-seeds");
const seedUserSteps = require("./userSteps-seeds")

const seedAllDayOne = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedUsers();
        console.log('Users seeded successfully');

        await seedUserProfilesDayOne();
        console.log('User profiles seeded successfully');

        await seedUserConnections();
        console.log('User connections seeded successfully');

        await seedUserSteps();
        console.log('User Steps seeded successfully');
        process.exit(0);
    } 
    catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }

};

seedAllDayOne();

/*

const seedAllDayTen = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedUsers();
        console.log('Users seeded successfully');

        await seedUserProfilesDayTen();
        console.log('User profiles seeded successfully');

        await seedUserConnections();
        console.log('User connections seeded successfully');
    } 
    catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }

};

const seedAllDayTwenty = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedUsers();
        console.log('Users seeded successfully');

        await seedUserProfilesDayTwenty();
        console.log('User profiles seeded successfully');

        await seedUserConnections();
        console.log('User connections seeded successfully');
    } 
    catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }

};

const seedAllDayThirty = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedUsers();
        console.log('Users seeded successfully');

        await seedUserProfielsDayThirty();
        console.log('User profiles seeded successfully');

        await seedUserConnections();
        console.log('User connections seeded successfully');
    } 
    catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }

};

const usersCurrentSteps = () => {
    if (currentDay < 9) {
        seedAllDayOne();
    }
    else if (currentDay > 9 && currentDay < 19) {
        seedAllDayTen();
    }
    else if (currentDay > 19 && currentDay < 29) {
        seedAllDayTwenty();
    }
    else {
        seedAllDayThirty();
    }
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    setTimeout(usersCurrentSteps, millisecondsInDay);
}

usersCurrentSteps();*/