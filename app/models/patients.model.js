module.exports = mongoose => {
   /* var schema = mongoose.Schema(
      {
        name: String,
        phone: String,
        direction: String,
        published: Boolean
      },
      { timestamps: true }
    );*/

    var schema = mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        address: String,
        phoneNumber: String,
        email: String,
        published: Boolean
      },
      { timestamps: true }
    );
  /*
     var schema = mongoose.Schema({
      firstName: String,
      lastName: String,
      dateOfBirth: Date,
      address: String,
      phoneNumber: String,
      email: String,
      doctorAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'  // "Doctor" hace referencia al modelo de Doctor
      },
      department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'  // "Department" hace referencia al modelo de Department
      }
    }, { timestamps: true });
 */

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;

      
   
      return object;
    });
  
    const Patient = mongoose.model("patient", schema);

    return Patient;
  };