const withAuth = (req, res, next) => {

    if (req.session.logged_in == true) {
        res.redirect('/login');
    } else {
        next();
    }
};
module.exports = withAuth;

