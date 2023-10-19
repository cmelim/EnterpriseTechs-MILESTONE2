module.exports = mongoose => {


  var schema = mongoose.Schema(
    {
      firstName: String,
      lastName: String,       
      phoneNumber: String,
      email: String
      
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    
 
    return object;
  });

  const Doctor = mongoose.model("doctor", schema);

  return Doctor;
};