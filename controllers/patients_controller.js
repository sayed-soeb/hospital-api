const Patient = require('../models/patient');
const Report = require('../models/report');

//Creating new report

module.exports.create = async function (req, res) {
  try {
    let patient = await Patient.findOne({ phoneNumber: req.body.phoneNumber });
    if (!patient) {
      patient = await Patient.create({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
      });
    return res.status(200).json({
      message: "patient successfully registered",
      patient: patient,
    });
  }
}
  catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Internal Server Error",
    });
  }
}

//Fetching all report of patient

module.exports.allReports = async function (req, res) {
  try{
    let patients = await Patient.findById(req.params.id).populate('report').exec();
    return res.status(200).json({
        message : "All reports generated till date for the user",
        data : patients.report,
    })
}
catch(err){
    return res.status(500).json({
        message: err
    });
}
}

//create new report
module.exports.createReport =async function(req,res){
  try{
      let patient = await Patient.findById(req.params.id);
      let reports = await Report.create({status : req.body.status , date : `${new Date(Date.now()).toLocaleDateString().toString()}` , patient : req.params.id});
      await patient.report.push(reports);
      //report reference added to the patient's database
      await patient.save();
      return res.status(200).json({
          message : "Report Generated Successfully",
          reports,
      });
  }
  catch(err){
      res.status(500).json({
          message : err,
      });
  }
}
//Controller added to create report