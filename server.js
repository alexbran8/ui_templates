const express = require('express')
const app = express()
const passport = require('passport')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require("path");
require('dotenv').config()
const config = require("./server/config/configProvider")();
// const cors = require("cors");
const serverPort = require('./server/config/config').serverPort
const sessionSecret = require('./server/config/config').jwtSecret
const cookieSettings = require('./server/config/config').cookieSettings

const port = process.env.PORT || serverPort

const errorHandlingMiddleware = require('./server/middleware/error')


config.db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const authCheckMiddleware = require('./server/middleware/auth-check')

app.use(session({ secret: sessionSecret, cookie: cookieSettings }))

app.use("/",  express.static(path.join(__dirname, './client/public/dist/')))
// app.get('*', (req, res) => {                       
//   res.sendFile(path.resolve(__dirname, './client/public/dist/', 'index.html'));                               
// });
// app.get('*', function(req, res) {
//   res.redirect('/');
// });

// if (process.env.NODE_ENV === 'production') {
  // console.log('production')
  // const publicPath = path.join(__dirname, './client/public/dist');
  // app.use(express.static(publicPath));
  // app.use('*', express.static(publicPath));
// }



require('./server/passport/passport')(passport)

app.use(passport.initialize())
app.use(passport.session())

app.use("/nptbeta/schedule", authCheckMiddleware(),  require("./server/controllers/schedule"));
app.use("/nptbeta/usersPrivate", authCheckMiddleware(), require("./server/controllers/usersPrivate"));
app.use("/nptbeta/users", authCheckMiddleware(),  require("./server/controllers/users"));

const authRoutes = require('./server/routes/auth')
app.use('/auth', authRoutes)

const apiRoutes = require('./server/routes/api')
app.use('/nptbeta/api', apiRoutes)

app.use(errorHandlingMiddleware())

app.listen(port, () => {
  console.log('The magic happens on port ' + port)
})
