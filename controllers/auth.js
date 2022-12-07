const User = require('../models/user')

exports.getLogin = (req, res, next) => {
    console.log(req.session.isLoggedIn)
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    })
}

exports.postLogin = (req, res, next) => {
    //MIDDLEWARE
    User.findById('638cff9017798f6c69b6274d')
    .then(user => {
        req.session.isLoggedIn = true
        req.session.user = user
        res.redirect('/')
      })
      .catch(err => console.log(err))
}