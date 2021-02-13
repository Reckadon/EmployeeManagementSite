import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import "./styles/employeeList.css";

class EmployeeList extends Component {
  render() {
    return <div id="employeesList">{this.getContent()}</div>;
  }
  getContent() {
    const employees = this.props.employees;
    if (employees.length === 0) {
      return <h2>No Data. Start by adding Employees!</h2>;
    }
    // else
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date Hired</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>{this.getEmployeeRows(employees)}</tbody>
      </table>
    );
  }
  getEmployeeRows(employees) {
    let srNo = 0;
    return employees.map((employee) => {
      srNo++;
      return <EmployeeRow key={srNo} employee={employee} />;
    });
  }
}

export default EmployeeList;
