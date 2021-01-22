import React, { Component } from "react";

class EmployeeList extends Component {
  render() {
    let data = localStorage.getItem("employees");
    if (data === null) {
      return <h2>No Data.</h2>;
    } else {
      data = JSON.parse(data);
      console.log(data);
    }
  }
}

export default EmployeeList;
