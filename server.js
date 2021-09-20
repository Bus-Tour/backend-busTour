'use strict';

const express = require('express');
const app=express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());

const axios = require('axios');
const {getStudentsByBusNumber,createAdmin,updateAdmin,deleteAdmin} = require('./controller/studentByBusNo.controller');
const { getBuss, createBusInfo, updateBusInfo, deleteBusInfo } = require('./controller/busInfo.controller');
const {getStudents,createStudents,updateStudents,deleteStudents} = require('./controller/students.controller');
const {getUserByEmail,createTeacher,updateTeacher,deleteTeacher} = require('./controller/getUserByEmail.controller');
const {getUser,createUser,updateUser,deleteUser} = require('./controller/user.controller');
const {getParentsInterFace} = require('./controller/parentsInterface.controller');
const getTeacherInterFace = require('./controller/teacherInterface.controller');

const PORT=process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
// const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URL);
////dataseed
const seedUser = require('./helper/userSeed.seed.js');
const SeedBus = require('./helper/busSeed.seed.js');
const seedStd = require('./helper/studentSeed.seed');
// seedStd();
// SeedBus();
// seedUser();
// admin get,create,update,delete data
app.get('/studentBYBusNo',getStudentsByBusNumber);
// app.post('/admin',createAdmin);
// app.put('/admin',updateAdmin);
// app.delete('/admin',deleteAdmin);

// Bus Info  get,create,update,delete data
app.get('/busInfo', getBuss);
app.post('/busInfo',createBusInfo);
app.delete('/busInfo/:busInfo_id',deleteBusInfo);
app.put('/busInfo/:busInfo_id',updateBusInfo);

// Students get,create,update,delete data
app.get('/students',getStudents);
app.post('/students',createStudents);
app.put('/students/:students_id',updateStudents);
app.delete('/students/:students_id',deleteStudents);

// Teacher get,create,update,delete data
app.get('/getUserByEmail',getUserByEmail);
// app.post('/teacher',createTeacher);
// app.put('/teacher/:teacher_id',updateTeacher);
// app.delete('/teacher/:teacher_id',deleteTeacher);

// User get,create,update,delete data
app.get('/user',getUser);
app.post('/user',createUser);
app.put('/user/:user_id',updateUser);
app.delete('/user/:user_id',deleteUser);
// app.get('/user',getUserByEmail)
// Parents interface get data
app.get('/parentsInterFace',getParentsInterFace);

// Teacher interface get data
// app.get('/teacherInterFace',getTeacherInterFace);

app.listen(PORT);
