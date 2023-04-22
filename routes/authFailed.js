const express = require('express');

const router = express.Router();

router.get('/authFailed',require('../controllers/authFailed').authFailed);
//route id auth fails

module.exports = router;