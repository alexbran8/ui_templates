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


app.use(session({ secret: sessionSecret, cookie: cookieSettings }))

app.use("/npt/",  express.static(path.join(__dirname, './client/public/dist/')))

app.use("/npt/schedule", require("./server/controllers/schedule"));
app.use("/npt/usersPrivate", require("./server/controllers/usersPrivate"));


console.log(path.join(__dirname, './client/public/dist/'))
require('./server/passport/passport')(passport)

app.use(passport.initialize())
app.use(passport.session())

const authRoutes = require('./server/routes/auth')
app.use('/auth', authRoutes)

const apiRoutes = require('./server/routes/api')
app.use('/api', apiRoutes)

app.use(errorHandlingMiddleware())

app.listen(port, () => {
  console.log('The magic happens on port ' + port)
})
