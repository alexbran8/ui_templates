const express = require('express')
const router = new express.Router()
const passport = require('passport')

// const authCheckMiddleware = require("../middleware/auth-check")

router.get('/login', (req, res) => {
  res.json({ message: 'Request login' })
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(`failed to /logout and destroy ${err.message}`)
    }
  })
})

router.get('/login-adfs', passport.authenticate('adfs', { session: true }) )

router.get('/cbAdfs', passport.authenticate('adfs',{ session: true }), (req, res) => {
  res.redirect('/nptbeta/')
})

module.exports = router
