import { NotificationsNone, SettingsOutlined } from "@material-ui/icons";
import "./topbar.css";

//assets
import ProfileImage from "../../../assets/seller_banner.jpg";

//icons
import { Menu } from "@material-ui/icons";

export default function () {
  return (
    <div className="topbar">
      <div className="topbar-ctr card">
        <div className="topbar-left-ctr">
          <div className="open_side_nav">
            <Menu fontSize="large" />
          </div>
          <div className="logo">Class Attendance</div>
        </div>
        <div className="topbar-right-ctr">
          <div className="topbar-icons">
            <div className="topbar-icon-wrapper">
              <SettingsOutlined fontSize="large" />
            </div>
            <div className="topbar-icon-wrapper">
              <NotificationsNone fontSize="large" />
              <span className="topbar-icon-badge">2</span>
            </div>
            <div className="topbar-icon-wrapper">
              <img
                src={ProfileImage}
                height="36px"
                width="36px"
                style={{ borderRadius: "50%" }}
                alt="ADMIN"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
