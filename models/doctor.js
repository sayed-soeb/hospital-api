const mongooose = require('mongoose');

const doctorSchema = new mongooose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }

},
  {
    timestamps: true,
  }

);

const Doctor = mongooose.model('Doctor', doctorSchema);
module.exports = Doctor;