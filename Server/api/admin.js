const router = require("express").Router();
const Course = require("../models/Course");

router.post("/new-course", async (req, res) => {
  const course = new Course({
    course_name: req.body.course_name,
    course_code: req.body.course_code,
    course_comment: req.body.course_comment,
    course_credit_units: req.body.course_credit_units,
    course_department: req.body.department,
    course_lecturer: req.body.course_lecturer,
  });
  try {
    const savedCourse = await course.save();
    res.send({
      data: "Course Added Successfully",
      result: savedCourse,
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.send({ data: "An Error Occured", status: false, result: error });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    console.log(error);
    res.send({ data: "An Error Occured", status: false, result: error });
  }
});

module.exports = router;
