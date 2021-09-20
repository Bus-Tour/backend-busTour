
// Added By Haneen Hashlamoun
//add by ahmad
const studentModel = require('../models/students.model');

//Get Students
const getStudents = (request, response) => {
    studentModel.find((error, StudentsData) => {
        response.json(StudentsData)
    });
};
//Create Students
const createStudents = (request, response) => {
    const { studentName, parentPhoneNo, email, busNo, status, comments } = request.body;
    const newStudent = new studentModel({
        studentName, parentPhoneNo, email, busNo, status, comments
    });
    newStudent.save();
    response.json(newStudent);
}

//Delete Students
const deleteStudents = (request, response) => {
    console.log(request.params);
    const studentId = request.params.students_id;
    studentModel.deleteOne({ _id: studentId }, (error, deletedData) => {
        response.json(deletedData);
    });
}

//Update Students
const updateStudents = (request, response) => {
    const { studentName, parentPhoneNo, email, busNo, status, comments } = request.body;
    const studentId = request.params.students_id;
    studentModel.findByIdAndUpdate({ _id: studentId }, {studentName, parentPhoneNo, email, busNo, status, comments }, { new: true }, (error, updatedStudentData) => {
        response.json(updatedStudentData);
    });
}

module.exports = {
    getStudents,
    createStudents,
    deleteStudents,
    updateStudents,
}