//// buss card controller 
'use strict';
const bussModel = require('../models/busInfo.model');
const getBuss = (request, response) => {
    bussModel.find((error, bussData) => {
        console.log(bussData);
        response.json(bussData)
    });
};

const createBusInfo = (request, response) => {
    const { busNo, driverName, area, licensePlateNo, driverPhoneNo, driverEmail, capacity } = request.body;
    const newBus = new bussModel({
        busNo, driverName, area, licensePlateNo, driverPhoneNo, driverEmail, capacity
    });
    console.log('bussssss')
    newBus.save();

    response.json(newBus);

}
const deleteBusInfo = (request, response) => {
    console.log(request.params);
    const busId = request.params.busInfo_id;
  
    bussModel.deleteOne({ _id: busId }, (error, deletedData) => {
  
      response.json(deletedData);
    });
  
  }
  const updateBusInfo = (request, response) => {
 

    const { busNo, driverName, area, licensePlateNo, driverPhoneNo, driverEmail, capacity } = request.body;
    const busId = request.params.busInfo_id;
  
    bussModel.findByIdAndUpdate({ _id: busId }, {   busNo, driverName, area, licensePlateNo, driverPhoneNo, driverEmail, capacity }, { new: true }, (error, updatedBusData) => {
  
      response.json(updatedBusData);
    });
  
  }
module.exports = {
    getBuss,
    createBusInfo,
    deleteBusInfo,
    updateBusInfo
}


