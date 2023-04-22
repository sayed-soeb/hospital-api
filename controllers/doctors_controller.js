const Docs = require('../models/doctor');
const jwt = require('jsonwebtoken');


//register a new doctor if it's not present

module.exports.create = async function (req, res) {

  console.log(req.body);
  try {
    let doctor = await Docs.findOne({ email: req.body.email });

    // if doctor exists the render the login page
    if (doctor) {

      return res.status(200).json({
        message: 'Already Registered, Please Login to Continue !!',
        data: {
          doctor: doctor
        }
      })

    } else {
      //create doctor
      doctor = await Docs.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      return res.status(200).json({
        message: 'You are registered Successfully!!',
        data: {
          doctor: doctor
        }
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({

      message: 'Internal Server Error',
    })
  }
}

//Sign in
module.exports.createSession2 = async function (req, res) {
  try {
    let doc = await Docs.findOne({ email: req.body.email });

    if (!doc || doc.password != req.body.password) {
      return res.status(422).json({
        message: "Invalid username or password",
      });
    }
    return res.status(200).json({
      message: "loged in successfully",
      data: {
        token: jwt.sign(doc.toJSON(), 'secret', { expiresIn: '2000000' }),
      }
    })
  }
  catch (err) {
    console.log(err);
    return res.status(401).json({
      message: 'Internal Server Error',
    })
  }
}