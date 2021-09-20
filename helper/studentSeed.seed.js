'use strict';
const StdModel = require('../models/students.model')
const seedStd = () => {
    const std = new StdModel({
        studentName: "ali",
        parentPhoneNo: "234435667",
        email: "parentemail1@gmail.com",
        busNo: "1",
        status: "1",
        comments: "this children is ..."
    });
    std.save()
    console.log("Data seeded! 👍");

}
module.exports = seedStd;