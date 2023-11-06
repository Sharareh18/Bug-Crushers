
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
      let lastTwoDigits = index % 100;
    
      if ((index >= 11 && index <= 13) || (lastTwoDigits >= 11 && lastTwoDigits <= 13)) {
        return index + "th";
      }
    
      let lastDigit = index % 10;
    
      switch (lastDigit) {
        case 1:
          return index + "st";
        case 2:
          return index + "nd";
        case 3:
          return index + "rd";
        default:
          return index + "th";
      }
    },    
    addCommas: (number) => {
      return number.toLocaleString();
    },
    placeFormatterLeaderPage: (index) => {
      index = index + 1;
      return index + "th";
    },
  }