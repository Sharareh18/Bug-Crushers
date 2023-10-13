const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds")
const seedUserProfiles = require("./userProfile-seeds")
const seedUserConnections = require("./userConnection-seeds");

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedUserProfiles();

    await seedUserConnections();
    
    process.exit(0);
};

seedAll();