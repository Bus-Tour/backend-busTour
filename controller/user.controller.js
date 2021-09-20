'use strict';
const userModel = require('../models/user.model');

const getUser = (request, response) => {

    userModel.find((error, useresData) => {
    response.json(useresData)
  });

};

const createUser = (request, response) => {

 
  const { userName, password, phoneNo ,email,privilege,type,busNoforTeacherOnly} = request.body;


  const newUser = new userModel({
    userName, password, phoneNo ,email,privilege,type,busNoforTeacherOnly
  });
console.log('llllllllllll')
  newUser.save();

  response.json(newUser);

}

const deleteUser = (request, response) => {
  console.log(request.params);
  const userId = request.params.user_id;

  userModel.deleteOne({ _id: userId }, (error, deletedData) => {

    response.json(deletedData);
  });

}

const updateUser = (request, response) => {
 

  const { userName, password, phoneNo ,email,privilege,type,busNoforTeacherOnly } = request.body;
  const userId = request.params.user_id;

  userModel.findByIdAndUpdate({ _id: userId }, {  userName, password, phoneNo ,email,privilege,type,busNoforTeacherOnly }, { new: true }, (error, updatedUserData) => {

    response.json(updatedUserData);
  });

}

module.exports = {
    getUser,
    createUser,
  deleteUser,
updateUser,
}