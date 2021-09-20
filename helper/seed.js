'use strict';
const BussModel = require('../models/busInfo.model')
const SeedBuss = () => {
    const buss1 = new BussModel({
        "busNumber": 1,
        "busDriverName": "osama",
        "area": "Amman",
        "licencePlateNo": "30-65488",
        "driverPhoneNumber": "0744489994",
        "email": "driveremail.gmail.com",
        "capacity": "20"
    });
    buss1.save()

}
module.exports = SeedBuss;