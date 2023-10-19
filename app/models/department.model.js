module.exports = mongoose => {


  var schema = mongoose.Schema(
    {
      namedepartmetn: String,
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

  const Department = mongoose.model("department", schema);

  return Department;
};