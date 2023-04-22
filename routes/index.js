const express = require('express');

const router = express.Router();

const homeCont = require('../controllers/home_cont');

// console.log("router loaded");

router.get('/', homeCont.home);

//to handle all routes of /doctors url
router.use('/doctors', require('./doctor'));

//to handle all routes od /patient url
router.use('/patients', require('./patient'));

//to handle all routes od /report url
router.use('/reports', require('./report'));


module.exports = router;