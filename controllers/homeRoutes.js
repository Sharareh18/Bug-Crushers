const router = require('express').Router(); // imports the router from the Express library

const { User, UserProfile, UserConnection } = require('../models'); // imports the User modelk for working witu user data
const withAuth = require('../utils/auth'); // imports the 'withAuth' middleware for authentication

// prevents non-logged-in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // retrieves the user data from the database, excluding the 'password' field
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']], // orders the results by the 'name' field in ascending order
    });

    // maps user data to plain JavaScript objects for easier rendering
    const users = userData.map((project) => project.get({ plain: true }));

    // renders the 'homepage' template, passing user data and the 'logged_in' flag
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in, // passes the 'logged_in' flag to the template
    });
  } catch (err) {
    res.status(500).json(err); // handles errors & sends a status code 500 (Internal Server Error)
  }
});
router.get('/login', (req, res) => {
  // if a user session exists (i.e., the user is already logged in), redirects to the homepage
  if (req.session.logged_in) {
    res.redirect('/'); // redirects to the homepage
    return;
  }

  res.render('login'); // renders the 'login' template for users who are not logged in
});


//get route to load leaders page
router.get("/leaders", async (req, res) => {

  const showAll = req.query.showAll;

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
      console.log(allUsers);
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
  else {
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
      console.log(leaders);
      leaders[0].numberOne = true;
      leaders[1].numberTwo = true;
      leaders[2].numberThree = true;
      res.render("leaders", {leaders});
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
        attributes: ["full_name", "bio", "profile_picture", "step_count"]
      }
    ],
      where: {
        id: userid,
      }
    });
    const profile = dbProfileData.map((profile) => profile.get({ plain: true}));
    let fullName = profile[0].UserProfile.full_name;
    let bio = profile[0].UserProfile.bio;
    let stepCount = profile[0].UserProfile.step_count;
    let profilePicture = profile[0].UserProfile.profile_picture;
    let friendCount = 0;
    let allFriends = profile[0].userConnections;
    allFriends.forEach((profile) => {
      friendCount++;
    })
    //.get( { plain: true}) turns the sequelize instance (instance of the model) into the normal javascript object 
    res.render('userProfile', {fullName, bio, stepCount, profilePicture, friendCount});
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




// get route to retrieve the User Profile while making sure they're logged in

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session id
//     const dbProfileData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: UserProfile }],
//     });

//     const user = dbProfileData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




module.exports = router; // exports the router to be used by other parts of the application

