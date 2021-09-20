
//made by Rawnaq Aburumman
'use strict';
const  studentsModel= require('../models/students.model');


const getTeacherInterFace = (request, response) => {

    studentsModel.find((error, studentsData) => {
    response.json(studentsData)
  });

};

const statusUpdate= (request, response) => {
   
  
    const { email, status} = request.body;
    const studentId = request.params.student_id;
  
    studentsModel.findByIdAndUpdate({ _id: studentId }, { status }, { new: true }, (error, updatedstudentStatus) => {
  
      response.json(updatedstudentStatus);
    });
  
  
  }
  module.exports = {
    statusUpdate,
    getTeacherInterFace 
  }