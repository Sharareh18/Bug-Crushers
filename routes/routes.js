const express = require('express');
const router = express.Router();
const { User, UserProfile } = require('../User');

router.get('/profile/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
      include: UserProfile,
    });

    if (user) {
      res.render('profile', { user });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user profile');
  }
});

module.exports = router;
