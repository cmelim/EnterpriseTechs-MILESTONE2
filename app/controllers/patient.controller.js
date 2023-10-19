const db = require("../models");
const Patient = db.patient;

// Create and Save a new Patient
exports.create = (req, res) => {

  //console.log("rCREQATE   equest es ::");
  //console.log(req)
  // Validate request
  if (!req.body.firstName) {
    console.log("req.body ::");
    console.log(req.body);
 
    
    res.status(400).send({ message: "Content can not be empty!!!!!" });
    return;
  }

  // Create a Patient
  const patient = new Patient({
    /*name: req.body.name,
    phone: req.body.phone,    
    direction: req.body.direction,
    published: req.body.published*/

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    published: req.body.published
  });

  // Save Patient in the database
  patient
    .save(patient)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Patient."
      });
    });
};

// Retrieve all Patient from the database.
exports.findAll = (req, res) => {
  const firstName = req.query.firstName;
  var condition = firstName ? { firstName: { $regex: new RegExp(firstName), $options: "i" } } : {};
  //var condition = name;

  Patient.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving patient."
      });
    });
};

// Find a single PATINET with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Patient.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found PATGIENt with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Patient with id=" + id });
    });
};

// Update a Patient by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Patient.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Patinet with id=${id}. Maybe Patient was not found!`
        });
      } else res.send({ message: "Patient was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Patient with id=" + id
      });
    });
};

// Delete a Patient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log("Patient Se eliminta el id : ");
  console.log(id);

  Patient.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete patiente with id=${id}. Maybe Patient was not found!`
        });
      } else {
        res.send({
          message: "PATIENTS was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete PATIENTS with id=" + id
      });
    });
};

// Delete all PATIENTS from the database.
exports.deleteAll = (req, res) => {
  Patient.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} PATIENTS were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all PATIENTS."
      });
    });
};

// Find all published PATIENTS
exports.findAllPublished = (req, res) => {
  Patient.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving PATIENTS."
      });
    });
};

