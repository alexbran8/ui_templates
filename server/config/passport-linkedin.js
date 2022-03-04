const jwt = require('jsonwebtoken')
const config = require("./config")
const router = require("express").Router();

module.exports = function (
  accessToken,
  refreshToken,
  params,
  profile,
  done
) {
  try {
  console.log(`**Passport LINKEDIN strategy ...`)
  // const userProfile = jwt.decode(params.id_token, '', true)
  // New user
  console.log(params)
  console.log(`**New LINKEDIN user...`)


  var user = {
    token: accessToken,
    // id: userProfile.aud,
    // groups: userProfile.groups,
    email: profile.emails[0].value,
    first_name: profile.name.givenName,
    last_name: profile.name.familyName,
    roles:'student',
    userName: profile.emails[0].value,
    // check how to add multiple roles
    // provider: 'adfs',
    exp: new Date(1000*params.expires_in)
  }
  console.log(`**ADFS LINKEDIN added...`)
  return done(null, user)
}
catch {
  console.log('error');
  return done(null, null)
}
}
