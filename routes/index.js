const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js');
const pollController = require('../controllers/pollController.js');
router.get('/', (req, res) => {
    res.redirect('/polls');
});

router.get('/register', indexController.showRegisterPage);
router.post('/register', indexController.registerUser);
router.get('/login', indexController.showLoginPage);
router.post('/login', indexController.loginUser);
router.get('/mypolls', pollController.myPolls);

module.exports = router;