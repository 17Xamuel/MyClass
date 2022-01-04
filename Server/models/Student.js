const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  student_surname: {
    type: String,
  },
  student_other_name: {
    type: String,
  },
  student_registration_number: {
    type: String,
  },
  student_phone_number: {
    type: String,
  },
});
module.exports = mongoose.model("Students", StudentSchema);
