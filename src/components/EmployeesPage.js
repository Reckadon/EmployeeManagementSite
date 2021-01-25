import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import Store from "../DataStorage";

class Employees extends Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    this.setState({ employees: Store.getEmployees() });
  }
  handleEmployeeAdded = () => {
    this.setState({ employees: Store.getEmployees() });
  };
  render() {
    return (
      <React.Fragment>
        <div id="main">
          <EmployeeList employees={this.state.employees} />
        </div>
        <div id="side">
          <AddEmployee onEmployeeAdded={this.handleEmployeeAdded} />
        </div>
      </React.Fragment>
    );
  }
}

export default Employees;
