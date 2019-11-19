var mongoose = require("mongoose");
var interest = require('./interest.js');
var Achievements = require('./Achievements.js');

var StudentInfoSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    EmailId: String,
    Age: String,
    Bio: String, 
    Interests: Array, 
    DOB: String,
    PhoneNo: String,
    SLocation: String,
    Achievement: [Achievements.schema]
});

module.exports = mongoose.model("StudentInfo", StudentInfoSchema);