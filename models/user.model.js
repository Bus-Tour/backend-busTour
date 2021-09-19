'use strict';
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    userName: { type: String },
    password: { type: String },
    phoneNo: { type: String },
    email: { type: String },
    privilege: { type: String },
    type: { type: String },
    busNoforTeacherOnly: { type: String },

})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;