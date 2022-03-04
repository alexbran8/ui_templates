const router = require("express").Router();
const passport = require("passport");
const config = require("../config/config")

 //secured api routes with no redirect
 function authorizeApi(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  } 
    else return     res.status(401).json({
     message : "User Not Authenticated",
     user : null,
     success: false,
   })
  }
  
// when login is successful, retrieve user info
router.get("/login/success",authorizeApi, (req, res) => {
  if (req.isAuthenticated() || req.user) {
    // get second time
    // console.log(req.body.start)
    // var midTime = performance.now()
    // var step3Time  = midTime -  req.user.step2Time
    res.json({
      success: true,
      message: "user has successfully been authenticated",
      user: req.user,
      cookies: req.cookies
    });              
}}
);


router.get("/login/linkedin", (req, res) => {
  console.log(req)
  if (req.isAuthenticated()  || req.user) {
    
    res.json({
      success: true,
      message: "user has successfully been authenticated",
      user: req.user,
      cookies: req.cookies
    });             
    
  } else {
    console.log('here')
    res.status(401).json({
      message : "User Not Authenticated",
      user : null,
      success: false,
    })
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(config.CLIENT_LANDING_PAGE_URL);
});

// auth with twitter
router.get("/azure", passport.authenticate("adfs"));

// redirect to home page after successfully login via twitter
router.get(
  "/azure/redirect/auth/cbAdfs",
  passport.authenticate("adfs", {
    successRedirect: config.CLIENT_HOME_PAGE_URL,
    failureRedirect: config.CLIENT_ERROR_URL
  })
);


router.get('/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    console.log(req)
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });

  router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: config.CLIENT_HOME_PAGE_URL,
    failureRedirect: config.CLIENT_ERROR_URL
  }));

module.exports = router;
