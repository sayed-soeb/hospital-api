const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');


let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
}


//JWT authentication
passport.use(new JWTStrategy(opts,async function (jwtPayLoad, done) {

  const user=await Doctor.findById(jwtPayLoad._id);
    if (!user) { console.log('Error in finding user from JWT'); return; }

    else if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }

}));

module.exports = passport;