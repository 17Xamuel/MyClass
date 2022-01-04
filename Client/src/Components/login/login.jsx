//styles
import "./login.css";
import "../../Designs/main.css";

//assets
import LOGO from "../../assets/logos/plus_logo_color.png";

//material
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

//api
import FormsApi from "../../api/api";

//dependences
import { useState } from "react";
import { Base64 } from "js-base64";

function Login() {
  const [apiFeedback, setApiFeedback] = useState(true);

  const form_submit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/seller/login", _fcontent);
    if (res.status === false) {
      setApiFeedback(false);
    } else {
      if (_fcontent.rem_me === "true") {
        const data = Base64.encode(JSON.stringify(res.user));
        localStorage.setItem("token", data);
        window.location.reload();
      } else {
        const data = Base64.encode(JSON.stringify(res.user));
        sessionStorage.setItem("token", data);
        window.location.reload();
      }
    }
  };
  return (
    <div className="login_ctr">
      <div className="form_ctr card">
        <form onSubmit={form_submit} className="login_form">
          <div className="login-logo-ctr">
            <img src={LOGO} alt="PLUSONLINE" />
          </div>
          <div className="login-inputs-ctr">
            <TextField
              error={!apiFeedback}
              helperText={apiFeedback ? "" : "Wrong Email or Phone"}
              variant="outlined"
              label="Email OR Phone"
              type="text"
              name="id"
              fullWidth
              style={{ margin: "20px 0px" }}
            />
            <TextField
              error={!apiFeedback}
              helperText={apiFeedback ? "" : "Wrong Password"}
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              fullWidth
              style={{ margin: "20px 0px" }}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox color="primary" name="rem_me" value="true" />
                }
                label="Remember Me On this Computer"
              />
            </FormGroup>
          </div>
          <div className="login-btn-ctr">
            <button className="btn-go">
              Go To Dashboard
              <div className="btn-go-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
