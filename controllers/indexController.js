const mysql = require('../db/connection.js');

module.exports.showRegisterPage = (req,res) => {
    res.render('register', {
        successMessages: req.flash('successMessages')
    });
}

module.exports.registerUser = async (req, res) => {
    // login the user dude!!


    try {
        const newUser = req.body;
        const connection = await mysql.getConnection();
        const insertUser = await connection.query('INSERT INTO user SET ?',newUser);
        req.flash('successMessages', 'Succesfully registered!');
        res.redirect('back');
    } catch(err) {
        console.log(err);
    }

}

module.exports.showLoginPage = (req, res) => {
    res.render('login');
}