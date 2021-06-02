function authCheckMiddleware () {
  return function (req, res, next) {
    console.log(req.user)
    if (req.user) {
      next()
    } else {
      // res.redirect('/auth/login-adfs')
      next({
        status: 401,
        message: 'Error: User not logged in.'
      })
    }
  }
}

module.exports = authCheckMiddleware
