const mongooose = require('mongoose');

const patientSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  report: [
    {
        type: mongooose.Schema.Types.ObjectId,
        ref: 'Report',
    }
]

},
  {
    timestamps: true,
  }

);

const Patient = mongooose.model('Patient', patientSchema);
module.exports = Patient;