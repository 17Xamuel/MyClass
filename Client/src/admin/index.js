//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./Routes/home";
import NewCourse from "./Routes/new-course";
import Courses from "./Routes/courses";
import Course from "./Routes/course";
import Students from "./Routes/students";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new" element={<NewCourse />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/id" element={<Course />} />
        <Route path="students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
};
