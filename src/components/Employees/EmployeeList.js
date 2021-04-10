import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import "./styles/employeeList.css";

class EmployeeList extends Component {
  render() {
    return <div id="employeesList">{this.getContent()}</div>;
  }
  getContent() {
    const employees = this.props.employees;
    if (this.props.isEmpty) {
      return (
        <>
          <h2>No Data. Start by adding Employees!</h2>
          <h3>
            Just visiting and need sample data? Click{" "}
            <span
              title="Get Sample Data"
              onClick={this.props.onRequestSampleData}>
              here
            </span>
            !
          </h3>
          <h5>
            <i className="fa fa-vial"></i> Sample Data Powered by{" "}
            <a
              href="https://www.mockaroo.com/"
              target="_blank"
              rel="noreferrer">
              Mockaroo <i className="fa fa-external-link-alt"></i>
            </a>
          </h5>
        </>
      );
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
            <th style={{ width: "1%" }}>Available</th>
          </tr>
        </thead>
        <tbody>{this.getEmployeeRows(employees)}</tbody>
      </table>
    );
  }
  getEmployeeRows(employees) {
    let srNo = 0;
    return employees.map(employee => {
      srNo++;
      return <EmployeeRow key={srNo} employee={employee} />;
    });
  }
}

export default EmployeeList;
