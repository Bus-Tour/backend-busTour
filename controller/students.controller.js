
// Added By Haneen Hashlamoun
const studentModel = require('../models/students.model');

//Get Students
const getStudents = (request, response) => {
    studentModel.find((error, StudentsData) => {
        response.json(StudentsData)
    });
};

//Create Students
const createStudents = (request, response) => {
    const { studentName, parentPhoneNumber, email, busNumber, status, comments } = request.body;
    const newStudent = new studentModel({
        studentName, parentPhoneNumber, email, busNumber, status, comments
    });
    newStudent.save();
    response.json(newStudent);
}

//Delete Students
const deleteStudents = (request, response) => {
    console.log(request.params);
    const StudentId = request.params.Student_id;
    studentModel.deleteOne({ _id: StudentId }, (error, deletedData) => {
        response.json(deletedData);
    });
}

//Update Students
const updateStudents = (request, response) => {
    const { studentName, parentPhoneNumber, email, busNumber, status, comments } = request.body;
    const StudentId = request.params.Student_id;
    studentModel.findByIdAndUpdate({ _id: StudentId }, {studentName, parentPhoneNumber, email, busNumber, status, comments }, { new: true }, (error, updatedStudentData) => {
        response.json(updatedStudentData);
    });
}

module.exports = {
    getStudents,
    createStudents,
    deleteStudents,
    updateStudents
}