module.exports = app => {
    const departments = require("../controllers/department.controller.js");
    var router = require("express").Router();
  

    // Create a new DOCTOR
    router.post("/", departments.create);


    // Retrieve all DEPARTMENT
    router.get("/", departments.findAll);
  
    
  
    // Retrieve a single DEPARTMENT with id
    router.get("/:id", departments.findOne);
  
    // Update a DEPARTMENT with id
    router.put("/:id", departments.update);
  
    // Delete a DEPARTMENT with id
    router.delete("/:id", departments.delete);
 
   
    app.use("/api/department", router);
  };