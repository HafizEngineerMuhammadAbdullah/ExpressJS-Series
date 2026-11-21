const mongoose = require("mongoose");

const teacherModel = new mongoose.Schema({
    name: String,
    email: String,
    phoneNo: Number,
    department: String,
    section: String,
    salary: Number,
    arrival_time: String,
    exit_time: String,
    duration: String
});

module.exports = mongoose.model("Teacher", teacherModel);


