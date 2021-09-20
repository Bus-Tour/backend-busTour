'use strict';
const BusModel = require('../models/busInfo.model')
const SeedBus = () => {
    const bus1 = new BusModel({
        busNo: "1",
        driverName: "osama",
        area: "Amman",
        licensePlateNo: "30-65488",
        driverPhoneNo: "0744489994",
        driverEmail: "driveremail.gmail.com",
        capacity: "20"
    });
    bus1.save()
    console.log("Data seeded! 👍");

}
module.exports = SeedBus;