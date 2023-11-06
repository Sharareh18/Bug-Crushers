const router = require('express').Router(); // imports the router from the Express library
const dayjs = require("dayjs");
const { User, UserProfile, UserConnection, UserSteps} = require('../models'); // imports the User modelk for working witu user data
const withAuth = require('../utils/auth'); // imports the 'withAuth' middleware for authentication

// use login page as the homepage and automatically direct users there. 
router.get('/', async (req, res) => {
  try {
   res.redirect('/login');

  } catch (err) {
    res.status(500).json(err); // handles errors & sends a status code 500 (Internal Server Error)
  }
});


router.get('/login', (req, res) => {
  //logout button featured in header determined here
  let logoutButtonVisible;
  if (req.session.logged_in == true) {
    logoutButtonVisible = true;
  }
  else {
    logoutButtonVisible = false;
  }
  //
  if (req.session.logged_in) { //redirects to profile page if user is logged in
    res.redirect('/profile/' + req.session.user_id); // redirects to the leaders page
    return;
  }
  res.render('login', {logoutButtonVisible}); // renders the 'login' template for users who are not logged in
});

router.get("/register", async (req, res) => {
  let noHeaders = true;
  try {
    res.render("register", {noHeaders});
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
})

//get route to load leaders page
router.get("/leaders", async (req, res) => {

  const showAll = req.query.showAll;

  //logout button featured in header determined here
  let logoutButtonVisible;

  let loggedInFeatures;
  if (req.session.logged_in == true) {
    loggedInFeatures = true;
  }
  else {
    loggedInFeatures = false;
  }


  if (req.session.logged_in == true) {
    logoutButtonVisible = true;
  }
  else {
    logoutButtonVisible = false;
  }

  //first part of this statement is not for rendering a page
  //this route is meant for providing data for leaderboard page to function
  if (showAll) {
    try {
      const dbAllUsersData = await User.findAll({
        include: [{
          model: UserSteps,
          attributes: ["steps_for_day", "date", "user_id"],
           //orders the associated UserProfile model by stepcount*/
        }]
      })
      
      let allUsers = dbAllUsersData.map((User) => User.get({ plain: true }));

      let thisMonth = dayjs().format("MM/YYYY");
      for (const user of allUsers) {
        if (user.UserSteps.length == 0) {
          user.totalSteps = 0;
        }
        for (const stepEntry of user.UserSteps) {
          let stepEntryDate = stepEntry.date;
          stepEntryDate = dayjs.unix(stepEntryDate).format("MM/YYYY"); //format date created as MM/YYYY
          let totalSteps = 0;
          if (thisMonth == stepEntryDate) {
            totalSteps += stepEntry.steps_for_day;
          }
          user.totalSteps = totalSteps;
        }
      }

      allUsers.sort((a, b) => {
        return b.totalSteps - a.totalSteps;
      });
       
      for (let i = 0; i < allUsers.length; i++)
      {
        allUsers[i].rank = i+1;
      }
      res.json(allUsers);
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  else { //this part is meant for rendering leaderboard page
    try {
      const dbLeadersData = await User.findAll({
        include: [{
          model: UserSteps,
          attributes: ["steps_for_day","date", "user_id"],
           //orders the associated UserProfile model by stepcount*/
        }]
      })

      let leaders = dbLeadersData.map((User) => User.get({ plain: true }));

      let thisMonth = dayjs().format("MM/YYYY");
      for (const leader of leaders) {
        if (leader.UserSteps.length == 0) {
          leader.totalSteps = 0;
        }
        for (const stepEntry of leader.UserSteps) {
          let stepEntryDate = stepEntry.date;
          stepEntryDate = dayjs.unix(stepEntryDate).format("MM/YYYY"); //format date created as MM/YYYY
          let totalSteps = 0;
          if (thisMonth == stepEntryDate) {
            totalSteps += stepEntry.steps_for_day;
          }
          leader.totalSteps = totalSteps;
        }
      }
      leaders.sort((a, b) => {
        return b.totalSteps - a.totalSteps;
      });
      leaders = leaders.slice(0,10);
      leaders.forEach((leader) => {
        leaders[0].numberOne = false;
        leaders[1].numberTwo = false;
        leaders[2].numberThree = false;
      })
      leaders[0].numberOne = true;
      leaders[1].numberTwo = true;
      leaders[2].numberThree = true;
      console.log(leaders)
      res.render("leaders", {loggedInFeatures, logoutButtonVisible, leaders});
      }
    catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
});

//retrieves User Profile for selected User in Leaderboard page
router.get("/profile/:userid", async (req, res) => {
  const userid = req.params.userid;

  let enableLoggedInFeatures;
  //use this variable to add features to profile page that 
  if (req.session.user_id == userid) {
    enableLoggedInFeatures = true;
  }
  else {
    enableLoggedInFeatures = false;
  }

  //logout button featured in header determined here
  let loggedInFeatures;
  if (req.session.logged_in == true) {
    loggedInFeatures = true;
  }
  else {
    loggedInFeatures = false;
  }

  //if this is the logged in user's page, eliminate add friend button
  let addFriendButtonVisible;
  if(req.session.user_id == userid) {
    addFriendButtonVisible = false;
  }
  else {
    addFriendButtonVisible = true;
  }

  let incomingFriendRequestsTable;
  if(req.session.user_id == userid) {
    incomingFriendRequestsTable = true;
  }
  else {
    incomingFriendRequestsTable = false;
  }

  try {
    //grabbing Step Challenge section data for UserProfile
    const dbStepData = await UserSteps.findAll({
      where: {
        user_id: userid,
      },
      order: [["date", "DESC"]]
    })

    let totalStepsThisMonth = 0;
    const stepData = dbStepData.map((stepLog) => stepLog.get({plain: true}));
    if (stepData.length != 0) { //if there is no stepData, then the "steps to reach goal" and "Step Total" will be empty
      //this will be the todayStepCount value
      for (const stepEntry of stepData) {
        let dateCreated = stepEntry.date;
        let thisMonth = dayjs().format("MM/YYYY");
        let dateFormatted = dayjs.unix(dateCreated).format("MM/YYYY");
        if (thisMonth == dateFormatted) {
          totalStepsThisMonth += stepEntry.steps_for_day;
        }
      }
      //need to use this to grab all the steps that fall within this month, and add them together to get total step Count
    }
    //grabbing profile section data for UserProfile
    const dbProfileData = await User.findAll({
      include: [
      {
        model: User,
        as: "userConnections",
        through: UserConnection,
      },
      {
        model: UserProfile,
        attributes: ["full_name", "bio", "profile_picture", "challenge", "user_background_color", "current_steps"]
      }
    ],
      where: {
        id: userid,
      }
    });

    const profile = dbProfileData.map((profile) => profile.get({ plain: true}));
    let username;
    let fullName = "";
    let bio = "";
    let current_steps = 0;
    let profilePicture = "";
    let challenge = "";
    let remainingDaysOfMonth
    let ChallengeOne;
    let ChallengeTwo;
    let ChallengeThree;
    let userBackgroundColor = "orangered";

    //this will check if the user has any friend requests and setthe corresponging variable to true or false
    //this variable is passed into the handlebar and changes where the friends Section is on the page
    let anyFriendRequests = false;
    let allFriendRequestData;

    if (enableLoggedInFeatures == true) {
      allFriendRequestsDBData = await UserConnection.findAll(
        {
          where: {
            "user_id_2": req.session.user_id,
            "status": "pending",
          },
          include: {
            model: User
          }
        }
      );
      allFriendRequestData = await allFriendRequestsDBData.map((friendRequest) => friendRequest.get({ plain: true }));
    }
    if (allFriendRequestData) {
      if (allFriendRequestData.length != 0) {
        anyFriendRequests = true;
      }
    }

    //this will handle the calculations for the challenge section of userProfile page
    let friendCount = 0;
    let goalStepsComma = 0;
    let goalSteps = 0;
    let dailyStepsToGoal = 0;
    if (profile[0].UserProfile != null) {
      username = profile[0].username;
      fullName = profile[0].UserProfile.full_name;
      bio = profile[0].UserProfile.bio;
      current_steps = profile[0].UserProfile.current_steps;
      userBackgroundColor = profile[0].UserProfile.user_background_color;
      parseInt(current_steps);
      current_steps= current_steps.toLocaleString();
      profilePicture = profile[0].UserProfile.profile_picture;
      challenge = profile[0].UserProfile.challenge;
      if (challenge == "Challenge One") {
        ChallengeOne = true;
        goalSteps = 300000;
        goalStepsComma = 300000;
        goalStepsComma = goalStepsComma.toLocaleString();
      }
      if (challenge == "Challenge Two") {
        ChallengeTwo = true;
        goalSteps = 200000;
        goalStepsComma = 200000;
        goalStepsComma = goalStepsComma.toLocaleString();
      }
      if (challenge == "Challenge Three") {
        ChallengeThree = true;
        goalSteps = 150000;
        goalStepsComma = 150000;
        goalStepsComma = goalStepsComma.toLocaleString();
      }
      goalSteps = parseInt(goalSteps);

      const daysThisMonth = parseInt(dayjs().daysInMonth());
      const dayOfThisMonth = parseInt(dayjs().format("DD"));
      remainingDaysOfMonth = daysThisMonth - dayOfThisMonth;
      dailyStepsToGoal = Math.round((goalSteps-totalStepsThisMonth)/remainingDaysOfMonth);
      totalStepsThisMonth = totalStepsThisMonth.toLocaleString();
      dailyStepsToGoal = dailyStepsToGoal.toLocaleString();
      if (remainingDaysOfMonth == 1) {
        remainingDaysOfMonth = remainingDaysOfMonth + " day"
      }
      else {
        remainingDaysOfMonth = remainingDaysOfMonth + " days"
      }
    }
    if (req.session.user_id) {
      //calculates friendCount value
      let connectionsOne = await UserConnection.findAll({
        where: {
          user_id_1: req.session.user_id,
          status: "accepted"
        }
      })
      connectionsOne = connectionsOne.map((connection) => connection.get({plain: true}));
      connectionsOne = connectionsOne.length;
      let connectionsTwo = await UserConnection.findAll({
        where: {
          user_id_2: req.session.user_id,
          status: "accepted"
        }
      })
      connectionsTwo = connectionsTwo.map((connection) => connection.get({plain:true}));
      connectionsTwo = connectionsTwo.length;
      friendCount = connectionsOne + connectionsTwo;
    }
    else {
      //calculates friendCount value
      let connectionsOne = await UserConnection.findAll({
        where: {
          user_id_1: userid
        }
      })
      connectionsOne = connectionsOne.map((connection) => connection.get({plain: true}));
      connectionsOne = connectionsOne.length;
      let connectionsTwo = await UserConnection.findAll({
        where: {
          user_id_2: userid
        }
      })
      connectionsTwo = connectionsTwo.map((connection) => connection.get({plain:true}));
      connectionsTwo = connectionsTwo.length;
      friendCount = connectionsOne + connectionsTwo;
    }

    //ranks allUsers and assigns rank value
    let rank;

    const dbAllUsersData = await User.findAll({
      include: [{
        model: UserSteps,
        attributes: ["steps_for_day", "date", "user_id"],
         //orders the associated UserProfile model by stepcount*/
      }]
    })
    let allUsers = dbAllUsersData.map((User) => User.get({ plain: true }));

    let thisMonth = dayjs().format("MM/YYYY");
    for (const user of allUsers) {
      if (user.UserSteps.length == 0) {
        user.totalSteps = 0;
      }
      for (const stepEntry of user.UserSteps) {
        let stepEntryDate = stepEntry.date;
        stepEntryDate = dayjs.unix(stepEntryDate).format("MM/YYYY"); //format date created as MM/YYYY
        let totalSteps = 0;
        if (thisMonth == stepEntryDate) {
          totalSteps += user.steps_for_day;
        }
        user.totalSteps = totalSteps;
      }
    }

    allUsers.sort((a, b) => {
      return b.totalSteps - a.totalSteps;
    });
     
    for (let i = 0; i < allUsers.length; i++)
    {
      allUsers[i].rank = i+1;
    }

    allUsers.forEach((user) => {
      if (user.id == userid) {
        rank = user.rank
      }
    })

    
    //.get( { plain: true}) turns the sequelize instance (instance of the model) into the normal javascript object 
    res.render('userProfile', {addFriendButtonVisible, incomingFriendRequestsTable, loggedInFeatures, enableLoggedInFeatures, username, fullName, bio, current_steps, profilePicture, remainingDaysOfMonth, goalSteps, goalStepsComma, dailyStepsToGoal, challenge, ChallengeOne, ChallengeTwo, ChallengeThree, friendCount, rank, userBackgroundColor, totalStepsThisMonth, anyFriendRequests});
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

//route to update UserProfile, update with is logged in
router.put("/profile/:userid", async (req, res) => {
  const userid = req.params.userid;
  //first need to update the 
  try {
    console.log(req.body.user_background_color);
    await UserProfile.update(
      {
        full_name: req.body.full_name,
        bio: req.body.bio,
        profile_picture: req.body.profile_picture,
        user_background_color: req.body.user_background_color,
        current_steps: req.body.current_steps
      },
      {
        where: {
          id: userid,
        },
        returning: true,
      }
    )
  }
  catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
})



module.exports = router; // exports the router to be used by other parts of the application

