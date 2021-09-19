'use strict';
const mongoose = require('mongoose');


const busInfoSchema = new mongoose.Schema({

    busNo: { type: String },
    driverName:{type:String},
    area: { type: String },
    licensePlateNo: { type: String },
    driverPhoneNo: { type: String },
    driverEmail: { type: String },
    capacity: { type: String },
})

const busInfoModel = mongoose.model('busInfo', busInfoSchema);

module.exports = busInfoModel;