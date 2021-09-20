'use strict';

const userModel = require('../models/user.model');

const seedUser = () => {

  const firstUser = new userModel({
   
    userName:'Sawsan',
    password:'0232333555' ,
    phoneNo:'234435667' ,
    email: 'parentemail1@gmail.com',
    privilege: '3',
    type:'parent' ,
    busNoforTeacherOnly:  '',
  });

  // save the cats data in the DB
  firstUser.save();


  console.log("Data seeded! 👍");
}

module.exports = seedUser;