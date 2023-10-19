module.exports = app => {
    const patients = require("../controllers/patient.controller.js");
  
    var router = require("express").Router();
  
    // Create a new PATIENT
    //JSON Example
    /*
    {
      "firstName": "Brad",
      "lastName": "Pit",
      "dateOfBirth": "1990-01-15",
      "address": "My House",
      "phoneNumber": "2333333",
      "email": "camilo@example.com",
      "published": true
   }*/
    router.post("/", patients.create);
  
    // Retrieve all PATIENT
    router.get("/", patients.findAll);
  
    // Retrieve all published PATIENT
    router.get("/published", patients.findAllPublished);
  
    // Retrieve a single PATIENT with id
    router.get("/:id", patients.findOne);
  
    // Update a PATIENT with id
    router.put("/:id", patients.update);
  
    // Delete a PATIENT with id
    router.delete("/:id", patients.delete);
  
    // Create a new PATIENT
    router.delete("/", patients.deleteAll);
  
    app.use("/api/patient", router);
  };