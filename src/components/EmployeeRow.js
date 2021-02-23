import Employee from "../EmployeeClass";
import React from "react";
import { Link } from "react-router-dom";

const EmployeeRow = ({ employee }) => {
  const employeeObj = new Employee(
    employee.id,
    employee.fName,
    employee.lName,
    employee.age,
    employee.salary,
    employee.designation,
    employee.gender,
    employee.number,
    employee.email,
    employee.onLeave,
    employee.dateEmployed
  );
  return (
    <tr>
      <td title="Employee ID">{employeeObj.id}</td>
      <td>
        <Link
          to={`employees/${employeeObj.fName}-${employeeObj.lName}-${employeeObj.id}`}
          title="Go to Profile"
          aria-label="Go to Profile"
        >
          {employeeObj.getFullName()}
        </Link>
      </td>
      <td title="Age in Years">{employeeObj.age}</td>
      <td title="Date: DD/MM/YY">{employeeObj.dateEmployed}</td>
      <td title="Employee Designation">{employeeObj.designation}</td>
      <td
        title="Employee Availability"
        style={{ padding: "0px", textAlign: "center" }}
      >
        <span
          className={`fas fa-${
            employeeObj.onLeave ? "times-circle" : "check-circle"
          }`}
          style={{
            fontSize: "28px",
            color: employeeObj.onLeave ? "#ec0000" : "#014968",
          }}
        ></span>
      </td>
    </tr>
  );
};

export default EmployeeRow;
