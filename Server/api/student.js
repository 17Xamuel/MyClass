const router = require("express").Router();
const Student = require("../models/Student");

router.post("/new-student", async (req, res) => {
  const student = new Student({
    student_surname: req.body.surname,
    student_other_name: req.body.othername,
    student_registration_number: req.body.registration_number,
    student_phone_number: req.body.phone_number,
  });

  try {
    const savedStudent = await student.save();
    res.send({
      data: "Registration Successful",
      result: savedStudent,
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.send({ data: "An Error Occured", status: false, result: error });
  }
});

router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    console.log(error);
    res.send({ data: "An Error Occured", status: false, result: error });
  }
});

module.exports = router;
