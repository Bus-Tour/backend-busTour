'use strict';
const studentModel = require('../models/students.model');

const getStudentsByBusNumber = (request, response) => {
  studentModel.find({ busNo: request.query.busNo }, (error, studentsData) => {
    response.json(studentsData);
  });
};

  module.exports = {
    getStudentsByBusNumber
  }