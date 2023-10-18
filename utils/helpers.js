
module.exports = {

    withAuth: (req, res, next) => {
      // If the user isn't logged in, redirect them to the login route
      if (!req.session.logged_in) {
        res.redirect('/login');
      }
      else {
        next();
      }
    },
    placeFormatter: (index) => {
      index = index + 1;
      return index + "th";
    },
    addCommas: (number) => {
      return number.toLocaleString();
    }

  }
}