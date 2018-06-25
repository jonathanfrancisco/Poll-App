

const mysql = require('../db/connection.js');
module.exports.getPolls = async (req, res) => {

    try {

        const connection = await mysql.getConnection();
        const polls = await connection.query('SELECT * FROM poll');
        res.render('polls', {
            polls: polls[0]
        });

    } catch(err) {
        console.log(err);
    }
 

}

