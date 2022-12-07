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
        req.session.save((err) => {
            console.log(err)
            res.redirect('/')
        })
      })
      .catch(err => console.log(err))
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err)
        res.redirect('/')
    })
}