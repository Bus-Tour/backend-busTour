'use strict';
const studentModel = require('../models/students.model');

const getParentsInterFace = (request, response) => {
  studentModel.find({ email: request.query.email }, (error, studentsData) => {
    response.json(studentsData);
  });
};

  module.exports = {
    getParentsInterFace
  }