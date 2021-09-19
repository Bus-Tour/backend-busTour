'use strict';

const express = requier('express');
const app=express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());

const axios = require('axios');
const {getAdmin,createAdmin,updateAdmin,deleteAdmin} = require('./controller/teacher.controller');
const {getBusInfo,createBusInfo,updateBusInfo,deleteBusInfo} = require('./controller/busInfo.controller');
const {getStudents,createStudents,updateStudents,deleteStudents} = require('./controller/students.controller');
const {getTeacher,createTeacher,updateTeacher,deleteTeacher} = require('./controller/teacher.controller');
const {getUser,createUser,updateUser,deleteUser} = require('./controller/user.controller');
const getParentsInterFace = require('./controller/parentsInterface.controller');
const getTeacherInterFace = require('./controller/teacherInterface.controller');


const PORT=process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

// admin get,create,update,delete data
app.get('/admin',getAdmin);
app.post('/admin',createAdmin);
app.update('/admin',updateAdmin);
app.delete('/admin',deleteAdmin);

// Bus Info  get,create,update,delete data
app.get('/busInfo',getBusInfo);
app.post('/busInfo',createBusInfo);
app.update('/busInfo/:busInfo_id',updateBusInfo);
app.delete('/busInfo/:busInfo_id',deleteBusInfo);

// Students get,create,update,delete data
app.get('/students',getStudents);
app.post('/students',createStudents);
app.update('/students/:students_id',updateStudents);
app.delete('/students/:students_id',deleteStudents);

// Teacher get,create,update,delete data
app.get('/teacher',getTeacher);
app.post('/teacher',createTeacher);
app.update('/teacher/:teacher_id',updateTeacher);
app.delete('/teacher/:teacher_id',deleteTeacher);

// User get,create,update,delete data
app.get('/user',getUser);
app.post('/user',createUser);
app.update('/user/:user_id',updateUser);
app.delete('/user/:user_id',deleteUser);

// Parents interface get data
app.get('/parentsInterFace',getParentsInterFace);

// Teacher interface get data
app.get('/teacherInterFace',getTeacherInterFace);

app.listen(PORT);
