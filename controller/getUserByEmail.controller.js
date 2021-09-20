'use strict';
const userModel = require('../models/user.model');

const getUserByEmail = (request, response) => {
    userModel.find({ email: request.query.email }, (error, userData) => {
    response.json(userData);
  });
};

  module.exports = {
    getUserByEmail
  }