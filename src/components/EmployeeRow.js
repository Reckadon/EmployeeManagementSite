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
    employee.onLeave
  );
  return (
    <tr>
      <td>{employeeObj.id}</td>
      <td>
        <Link
          to={`employees/${employeeObj.fName}-${employeeObj.lName}-${employeeObj.id}`}
        >
          {employeeObj.getFullName()}
        </Link>
      </td>
      <td>{employeeObj.age}</td>
      <td>{employeeObj.dateEmployed}</td>
      <td>{employeeObj.designation}</td>
    </tr>
  );
};

export default EmployeeRow;
