const Report = require('../models/report');

module.exports.status = async function(req,res){
  try {
    const { status } = req.params;

    const result = await Report.find({ status: status });
    if (result.length > 0) {
       return res.status(200).json(result);
    } else {
       return res.status(200).json({ message: "there is no result found!" });
    }
 } catch (error) {
    return res.status(400).json(error);
 }
}