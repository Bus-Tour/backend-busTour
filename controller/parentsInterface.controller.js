'use strict';
const studentModel = require('../models/students.model');


const getParentsInterFace = (request, response) => {

    studentModel.StudentsData.find((error, students) => {
    response.json(students)
  });

};

  module.exports = {
    getParentsInterFace
  }