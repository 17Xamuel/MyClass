//styles
import "./sidebar.css";

//assets
import ProfileImage from "../../../assets/logos/plus_logo_color.png";

//react router
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-hdr">
          <img src={ProfileImage} alt="CLASSIMAGE" />
          <span>LCS 19</span>
        </div>
        <div className="sidebar-links">
          <Link to="/">
            <div
              className={
                props.active === "home" ? "sidebar-link active" : "sidebar-link"
              }
            >
              <i className="las la-home"></i>
              <span>Home</span>
            </div>
          </Link>
          <Link to="/courses">
            <div
              className={
                props.active === "courses"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <i className="las la-globe"></i>
              <span>Courses</span>
            </div>
          </Link>
          <Link to="/students">
            <div
              className={
                props.active === "students"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <i className="las la-boxes"></i>
              <span>Students</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
