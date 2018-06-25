const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController.js');

router.get('/', pollController.getPolls);



module.exports = router;