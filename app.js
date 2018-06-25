
const express = require('express'),
      bodyParser = require('body-parser'),
      config = require('./config/config.js'),
      flash = require('connect-flash'),
      session = require('express-session'),
      path = require('path');
const app = express();


app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false

}));
app.use(bodyParser.urlencoded({extended: false}));

// ROUTES
app.use('/', require('./routes/index.js'));
app.use('/polls', require('./routes/poll.js'));

app.use((req, res, next) => {
    res.status(404).send('Page not found');
});


app.listen(config.serverPort, () => {
    console.log(`Listening on port ${config.serverPort}`);
});

