//react
import React, { Component } from "react";

//components
import TopBar from "../Components/Topbar/topbar";
import SideNav from "../Components/sidebar/sidebar";

//material
import { Button, TextField, Snackbar, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Alert as MuiAlert, Slide } from "@mui/material";

//api
import FormsApi from "../../api/api";

//styling
import "./designs/products.css";

//alert for material ui
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class NewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files64: [],
      fieldsError: false,
      mui: {
        snackBarOpen: false,
        snackBarMessage: "",
        snackBarStatus: "",
        snackBarPosition: { vertical: "top", horizontal: "right" },
      },
    };

    // this.filesRef = React.createRef();
  }
  componentDidMount = () => {
    document.title = "New Course";
  };

  //submit
  submitProduct = async (e) => {
    e.preventDefault();
    let formDataInstance = new FormData(e.target);
    let data = {};
    formDataInstance.forEach((v, i) => {
      data[i] = v;
    });
    let res = new FormsApi().post("/admin/new-course", data);
    console.log(res);
  };
  //mui
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      ...this.state,
      mui: { ...this.state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };
  //mui
  render() {
    return (
      <>
        <Snackbar
          open={this.state.mui.snackBarOpen}
          anchorOrigin={this.state.mui.snackBarPosition}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={this.state.mui.snackBarMessage}
          TransitionComponent={(props) => <Slide {...props} direction="down" />}
          // action={
          //   <React.Fragment>
          //     <Button color="secondary" size="small" onClick={this.handleClose}>
          //       UNDO
          //     </Button>
          //     <IconButton
          //       size="small"
          //       aria-label="close"
          //       color="inherit"
          //       onClick={this.handleClose}
          //     >
          //       <Close fontSize="small" />
          //     </IconButton>
          //   </React.Fragment>
          // }
        >
          <Alert
            onClose={this.handleClose}
            severity={this.state.mui.snackBarStatus}
            sx={{ width: "100%" }}
          >
            {this.state.mui.snackBarMessage}
          </Alert>
        </Snackbar>

        <TopBar />
        <div className="ctr">
          <div className="main">
            <div className="side-ctr card">
              <SideNav active="courses" />
            </div>
            <div className="main-ctr card">
              <div className="pdts-header-btns">
                <div>
                  <h2>New Course</h2>
                </div>
                <div>
                  <Button variant="outlined" color="primary">
                    All Courses
                  </Button>
                </div>
              </div>
              <div className="pdts-form-ctr">
                <form onSubmit={this.submitCourse} className="new_product_form">
                  <div className="inputs_ctr">
                    <div style={{ marginBlock: 10, fontWeight: "bold" }}>
                      Course Information
                    </div>
                    <div className="inputs_ctr_border">
                      <div className="inputs_ctr_flex">
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Course Name"
                          name="course_name"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Course Code"
                          name="course_code"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                      </div>
                      <div className="inputs_ctr_fullwidth">
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Comment"
                          name="course_comment"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="inputs_ctr_flex">
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Credit Units"
                          name="course_credit_units"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Department"
                          name="department"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <div className="inputs_ctr_halfwidth">
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Lecturer(will be selected)"
                          name="course_lecturer"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inputs_ctr">
                    <div style={{ marginBlock: 10, fontWeight: "bold" }}>
                      Other Information
                    </div>
                    <div className="inputs_ctr_border">
                      <div className="inputs_ctr_flex">
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Course Leader(Reg. No)"
                          name="course_leader_reg_no"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Ass. Course Leader(Reg. No)"
                          name="course_code"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                      </div>
                      <div className="inputs_ctr_flex">
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Year"
                          name="year"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Semester(will be selected)"
                          name="semester"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <div className="inputs_ctr_halfwidth">
                        <TextField
                          variant="outlined"
                          color="primary"
                          label="Program"
                          name="program"
                          style={{ width: "40%" }}
                          error={this.state.fieldsError}
                          helperText={
                            this.state.fieldsError
                              ? "This field maybe empty, but its required"
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: 20,
                      }}
                    >
                      <Button variant="outlined" color="primary" type="submit">
                        Submit Course
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewCourse;
