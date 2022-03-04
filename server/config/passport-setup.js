const passport = require("passport");
const AzureOAuth2Strategy = require('passport-azure-ad-oauth2')
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const config = require('../config/config')



  passport.serializeUser((profile, done) => {
    done(null, profile)
  })

  passport.deserializeUser((profile, done) => {
    done(null, profile)
  })

  console.log(config.azureApp)


passport.use(
  'adfs',
  new AzureOAuth2Strategy(
    {
      clientID: config.azureApp.clientID,
      clientSecret: config.azureApp.clientSecret,
      callbackURL: config.azureApp.callbackUri,
      resource: config.azureApp.resource,
      tenant: config.azureApp.tenant
    },
    (accessToken, refreshToken, params, profile, done) =>
      adfsStrategy(
        accessToken,
        refreshToken,
        params,
        profile,
        done
      )
  )
)

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_KEY,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: "http://localhost:4000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_liteprofile'],
}, (accessToken, refreshToken, params, profile, done) =>
linkedinStrategy(
  accessToken,
  refreshToken,
  params,
  profile,
  done
)


));
// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: keys.TWITTER_CONSUMER_KEY,
//       consumerSecret: keys.TWITTER_CONSUMER_SECRET,
//       callbackURL: "/auth/twitter/redirect"
//     },
//     async (token, tokenSecret, profile, done) => {
//       // find current user in UserModel
//       const currentUser = await User.findOne({
//         twitterId: profile._json.id_str
//       });
//       // create new user if the database doesn't have this user
//       if (!currentUser) {
//         const newUser = await new User({
//           name: profile._json.name,
//           screenName: profile._json.screen_name,
//           twitterId: profile._json.id_str,
//           profileImageUrl: profile._json.profile_image_url
//         }).save();
//         if (newUser) {
//           done(null, newUser);
//         }
//       }
//       done(null, currentUser);
//     }
//   )
// );


const adfsStrategy = require('./passport-adfs')
const linkedinStrategy = require('./passport-linkedin')
// module.exports = function (passport) {
//   passport.serializeUser((profile, done) => {
//     done(null, profile)
//   })

//   passport.deserializeUser((profile, done) => {
//     done(null, profile)
//   })

//   // ADFS signup strategy
//   passport.use(
//     'adfs',
//     new AzureOAuth2Strategy(
//       {
//         clientID: config.azureApp.clientID,
//         clientSecret: config.azureApp.clientSecret,
//         callbackURL: config.azureApp.callbackUri,
//         resource: config.azureApp.resource,
//         tenant: config.azureApp.tenant
//       },
//       (accessToken, refreshToken, params, profile, done) =>
//         adfsStrategy(
//           accessToken,
//           refreshToken,
//           params,
//           profile,
//           done
//         )
//     )
//   )
// }