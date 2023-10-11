const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds")
const seedUserSteps = require("./userSteps-seeds");

const seedAll = async () => {
    await sequelize.sync({ force: true })

    await seedUsers();
    
    await seedUserSteps();

    process.exit(0);

};

seedAll();