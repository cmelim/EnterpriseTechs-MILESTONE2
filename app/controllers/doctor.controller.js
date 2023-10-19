const db = require("../models");
const Doctor = db.doctor;

// Create and Save a new DOTOR
exports.create = (req, res) => {

  console.log("Create  Doctor  req.body");
  //console.log(req)
  // Validate request
  if (!req.body.firstName) {
    console.log("rCreate  Doctor eq.body ::");
    console.log(req.body);
 
    
    res.status(400).send({ message: "Content can not be empty!!!!!" });
    return;
  }

  // Create a DOCTOR
  const doctor = new Doctor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,

  });

  // Save Patient in the database
  doctor
    .save(doctor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Doctor."
      });
    });
};

// Retrieve all Patient from the database.
exports.findAll = (req, res) => {
  const firstName = req.query.firstName;
  var condition = firstName ? { firstName: { $regex: new RegExp(firstName), $options: "i" } } : {};
  //var condition = name;

  Doctor.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Doctor."
      });
    });
};

// Find a single Doctor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Doctor.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Doctor with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Doctor with id=" + id });
    });
};

// Update a Doctor by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Doctor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Doctor with id=${id}. Maybe Patient was not found!`
        });
      } else res.send({ message: "Doctor was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Patient with id=" + id
      });
    });
};

// Delete a Doctor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Doctor.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete doctor with id=${id}. Maybe Patient was not found!`
        });
      } else {
        res.send({
          message: "Doctor was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Doctor with id=" + id
      });
    });
};

 

 

