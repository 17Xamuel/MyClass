const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
  course_name: {
    type: String,
  },
  course_code: {
    type: String,
  },
  course_credit_units: {
    type: Number,
  },
  course_department: {
    type: String,
  },
  course_comment: {
    type: String,
  },
  course_lecturer: {
    type: String,
  },
});

module.exports = mongoose.model("Courses", CourseSchema);
