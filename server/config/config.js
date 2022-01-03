const Sequelize = require("sequelize");
require('dotenv').config({ path: '../.env' });
/* 
 * create a `.env` file with environment variables in order to laod at runtime.
*/

const hostUrl = process.env.NODE_ENV === `development` ? "http://localhost:4000/auth/azure/redirect" :  process.env.HOST_URL;
const baseLocation = process.env.NODE_ENV === `development` ? "" :  '';



var config = {
  CLIENT_HOME_PAGE_URL: process.env.NODE_ENV === `development` ? "http://localhost:3000/#/home" :  'https://ecosystem.eecloud.dynamic.nsn-net.net/#/home',
  CLIENT_ERROR_URL: process.env.NODE_ENV === `development` ? "http://localhost:3000/#/error" :  'https://ecosystem.eecloud.dynamic.nsn-net.net/#/error',
  CLIENT_LANDING_PAGE_URL:process.env.NODE_ENV === `development` ? "http://localhost:3000/" :  'https://ecosystem.eecloud.dynamic.nsn-net.net/',
  azureApp: {
    // Azure Application details
    base: process.env.AAD_AUTH_URL,
    clientID: process.env.AAD_AUTH_CLIENTID,
    clientSecret: process.env.AAD_AUTH_CLIENTSECRET,
    callbackUri: hostUrl + '/auth/cbAdfs',
    resource: process.env.MS_GRAPH_URL,
    tenant: process.env.AAD_AUTH_TENANT
  },
  baseLocation: baseLocation,
  jwtSecret: process.env.APP_SESSION_SECRET || 'big Secret',
  cookieSettings: {
    maxAge: 360000
  },
  serverPort: process.env.DB_PORT || 8080,
  // db: new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: "postgres",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000,
  //   },
  // }),
}

module.exports = config
