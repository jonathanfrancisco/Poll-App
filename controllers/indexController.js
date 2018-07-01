const mysql = require('../db/connection.js');

module.exports.showRegisterPage = (req,res) => {

    if(req.session.loggedIn) 
        res.redirect('/polls');

    res.render('register', {
        successMessages: req.flash('successMessages'),
        errorMessages: req.flash('errorMessages'),
        login: req.session.loggedIn
    });
}

module.exports.registerUser = async (req, res) => {
    // login the user dude!!
    try {
        const newUser = req.body;
        const connection = await mysql.getConnection();
        // check if username already exists
        const user = await connection.query('SELECT * FROM user WHERE username = ?',[req.body.username]);
        if(user[0].length > 0){
            req.flash('errorMessages', 'Username already exists!');
            res.redirect('back');
        } 
        else {
            await connection.query('INSERT INTO user SET ?',newUser);
            req.flash('successMessages', 'Succesfully registered!');
            res.redirect('back');
        }
    } catch(err) {
        console.log(err);
    }
}

module.exports.showLoginPage = (req, res) => {
    if(req.session.loggedIn)
        res.redirect('/polls');
    res.render('login', {
        errorMessages: req.flash('errorMessages'),
        login: req.session.loggedIn
    });
}

module.exports.loginUser = async (req, res) => {
    const userCredentials = req.body;
    const connection = await mysql.getConnection();
    const user = await connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [userCredentials.username, userCredentials.password]);
    console.log(user[0]);
    if(user[0].length === 0) {
        req.flash('errorMessages', 'Incorrect username or password. Please, try again.');
        res.redirect('back');
    }
    else {
        req.session.loggedIn = true;
        res.redirect('/polls');
    }
}
