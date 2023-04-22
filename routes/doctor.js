const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctors_controller');

router.post('/register', doctorController.create);
router.post('/login', doctorController.createSession2);


module.exports = router;