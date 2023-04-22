const mongoose = require('mongoose');


const Schema =new mongoose.Schema({
    status : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
    patient : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PatientDetails',
    }
});
//Created schema for report

const Report = mongoose.model('Report',Schema);
//Named the collection as Report

module.exports = Report;