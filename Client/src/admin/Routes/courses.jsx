//components
import TopBar from "../Components/Topbar/topbar";
import SideNav from "../Components/sidebar/sidebar";

//material
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";

//styling
import "./designs/products.css";
import { Link } from "react-router-dom";

//static data for the grid(table format)
const columns = [
  { field: "id", headerName: "Date - Time", width: 150 },
  {
    field: "firstName",
    headerName: "Placed By",
    width: 120,
  },
  {
    field: "lastName",
    headerName: "Contact",
    width: 120,
  },
  {
    field: "age",
    headerName: "Details",
    width: 100,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default () => {
  return (
    <>
      <TopBar />
      <div className="ctr">
        <div className="main">
          <div className="side-ctr card">
            <SideNav active="courses" />
          </div>
          <div className="main-ctr card">
            <div className="pdts-header-btns">
              <div>
                <h2>Plus - Products</h2>
              </div>
              <div>
                <Link to="/products/new">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginInline: 10 }}
                  >
                    New Product
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginInline: 10 }}
                >
                  All Products
                </Button>
              </div>
            </div>
            <div className="pdts-grid-ctr trending">
              <div>Top Products</div>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                autoHeight
                style={{ width: "100%" }}
              />
            </div>
            <div className="pdts-grid-ctr pending">
              <div>Pending Confirmation</div>
              <DataGrid rows={rows} columns={columns} pageSize={6} autoHeight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
