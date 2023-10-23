const router = require('express').Router(); // imports the router from the Express library

const { User, UserProfile, UserConnection } = require('../models'); // imports the User modelk for working witu user data
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
  }
  res.render('login', {logoutButtonVisible}); // renders the 'login' template for users who are not logged in
});


//get route to load leaders page
router.get("/leaders", async (req, res) => {

  const showAll = req.query.showAll;

  //logout button featured in header determined here
  let logoutButtonVisible;

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
          model: UserProfile,
          attributes: ["step_count"],
        }],
        order: [[UserProfile, "step_count", "DESC"]]
      })
      
      const allUsers = dbAllUsersData.map((User) => User.get({ plain: true })); //all Users is sorted by 
      for (let i = 0; i < allUsers.length; i++)
      {
        allUsers[i].rank = i+1;
      }
      res.json(allUsers);
    }
    catch (err) {
      console.log(error);
      res.status(500).json(err);
    }
  }
  else { //this part is meant for rendering leaderboard page
    try {
      const dbLeadersData = await User.findAll({
        include: [{
          model: UserProfile,
          attributes: ["step_count"],
           //orders the associated UserProfile model by stepcount*/
        }],
        limit: 10,
        order: [[UserProfile, "step_count", "DESC"]]
      })
      
      const leaders = dbLeadersData.map((leader) => leader.get({ plain: true }));
      leaders[0].numberOne = true;
      leaders[1].numberTwo = true;
      leaders[2].numberThree = true;
      res.render("leaders", {logoutButtonVisible, leaders});
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

  //if this is the logged in user's page, eliminate add friend button
  let addFriendButtonVisible;
  if(req.session.user_id == userid) {
    addFriendButtonVisible = false;
  }
  else {
    addFriendButtonVisible = true;
  }

  //logout button featured in header determined here
  let logoutButtonVisible;
  if (req.session.logged_in == true) {
    logoutButtonVisible = true;
  }
  else {
    logoutButtonVisible = false;
  }

  try {
    const dbProfileData = await User.findAll({
    //need to use findAll here so that the return results is in an array,
    //then the .map() function can be called
      include: [
      {
        model: User,
        as: "userConnections",
        through: UserConnection,
      },
      {
        model: UserProfile,
        attributes: ["full_name", "bio", "profile_picture", "user_background_color", "step_count"]
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
    let stepCount = 0;
    let profilePicture = "";
    let userBackgroundColor = "orangered";
    let friendCount = 0;

    if (profile[0].UserProfile != null) {
      console.log("not null!");
      username = profile[0].username;;
      fullName = profile[0].UserProfile.full_name;
      bio = profile[0].UserProfile.bio;
      stepCount = profile[0].UserProfile.step_count;
      profilePicture = profile[0].UserProfile.profile_picture;
      userBackgroundColor = profile[0].UserProfile.user_background_color;
      console.log(userBackgroundColor);
      allFriends = profile[0].userConnections;
      allFriends.forEach((profile) => {
        friendCount++;
      })
    }

    let enableLoggedInFeatures;

    if (req.session.user_id == userid) {
      enableLoggedInFeatures = true;
    }
    else {
      enableLoggedInFeatures = false;
    }
    
    //.get( { plain: true}) turns the sequelize instance (instance of the model) into the normal javascript object 
    res.render('userProfile', {addFriendButtonVisible, logoutButtonVisible, username, fullName, bio, stepCount, profilePicture, friendCount, userBackgroundColor, enableLoggedInFeatures});
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
    await UserProfile.update(
      {
        full_name: req.body.full_name,
        bio: req.body.bio,
        profile_picture: req.body.profile_picture,
        user_background_color: req.body.user_background_color,
        step_count: req.body.step_count
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

