import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

class Employees extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="main">
          <EmployeeList />
        </div>
        <div id="side">
          <AddEmployee />
        </div>
      </React.Fragment>
    );
  }
}

export default Employees;
