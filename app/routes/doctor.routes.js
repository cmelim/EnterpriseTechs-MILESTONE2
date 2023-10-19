module.exports = app => {
    const doctors = require("../controllers/doctor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new DOCTOR
    router.post("/", doctors.create);
  
    // Retrieve all DOCTOR
    router.get("/", doctors.findAll);
  
    
  
    // Retrieve a single DOCTOR with id
    router.get("/:id", doctors.findOne);
  
    // Update a DOCTOR with id
    router.put("/:id", doctors.update);
  
    // Delete a DOCTOR with id
    router.delete("/:id", doctors.delete);
 
  
    app.use("/api/doctor", router);
  };