

const mysql = require('../db/connection.js');
module.exports.getPolls = async (req, res) => {

    try {

        const connection = await mysql.getConnection();

        const itemsPerPage = 12;
        const offset = !req.params.page ? 1 : req.params.page;
        connection.query('DELETE FROM poll WHERE title = ?',['PRIII~']);
        const totalRecords = await connection.query('SELECT count(*) AS count FROM poll');
        const polls = await connection.query(`SELECT * FROM poll ORDER BY created_at DESC LIMIT ${itemsPerPage} OFFSET ${offset} `);
        connection.end();
        res.render('polls', {
            polls: polls[0],
            currentPage: offset,
            pages: Math.ceil(totalRecords[0][0].count / itemsPerPage)
        });

    } catch(err) {
        console.log(err);
        res.send('Something went wrong!');
    }
 

}

