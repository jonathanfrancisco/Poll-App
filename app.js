
const express = require('express'),
      bodyParser = require('body-parser'),
      config = require('./config/config.js');
      ejs = require('ejs'),
      flash = require('connect-flash'),
      session = require('express-session');
const app = express();


app.set('view engine', ejs);
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false

}));
app.use(bodyParser.urlencoded({extended: false}));



app.listen(config.serverPort, () => {
    console.log(`Listening on port ${config.serverPort}`);
});

