import Employee from "../EmployeeClass";
import React from "react";

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
      <td>{employeeObj.getFullName()}</td>
      <td>{employeeObj.age}</td>
      <td>{employeeObj.salary}</td>
    </tr>
  );
};

export default EmployeeRow;
