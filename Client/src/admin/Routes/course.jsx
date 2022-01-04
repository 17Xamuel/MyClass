//css
import "./designs/website.css";

//components
import TopBar from "../Components/Topbar/topbar";
import SideNav from "../Components/sidebar/sidebar";

export default () => {
  return (
    <>
      <TopBar />
      <div className="main">
        <div className="side-ctr card">
          <SideNav active="courses" />
        </div>
        <div className="main-ctr card">Single Course</div>
      </div>
    </>
  );
};
