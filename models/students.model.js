'use strict';
const mongoose = require('mongoose');


const studentsSchema = new mongoose.Schema({

    studentName:{type:String},
    parentPhoneNo: { type: String },
    parentEmail: { type: String },
    busNo: { type: String },
    status: { type: String },
    comments: { type: String },
})

const studentsModel = mongoose.model('students', studentsSchema);

module.exports = studentsModel;