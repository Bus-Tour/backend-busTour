//// buss card controller 
'use strict';
const bussModel = require('../models/busInfo.model');
const getBuss = (request, response) => {
    bussModel.find((error, bussData) => { response.json(bussData) });
};
module.exports = { getBuss }


