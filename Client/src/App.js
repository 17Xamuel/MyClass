//styling
import "./app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

//react
import React from "react";

// Components
import user from "./app.config";
import Login from "./Components/login/login";
import Admin from "./admin/index";
// import Admin from "./admin/index";

export default () => (user.role === "admin" ? <Admin /> : <Login />);

// function App() {
//   if (user.role === "admin") {
//     return <Admin />;
//   } else if (user.role === "seller") {
//     return <Seller />;
//   } else {
//     return <Login />;
//   }
// }

// export default App;
