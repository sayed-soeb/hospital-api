const express = require('express');
const router = express.Router();
const passport = require('passport');


const reportController = require('../controllers/reports_controller');

//creating route for report


router.get('/:status', reportController.status);
//route to get all reports of a specific status


module.exports = router;