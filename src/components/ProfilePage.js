import React, { useState } from "react";
import Store from "../DataStorage";
import Employee from "../EmployeeClass";
import "./styles/ProfilePage.css";

const ProfilePage = ({ match }) => {
  const name = match.params.name;
  const id = Number(name.slice(-1));

  const [employee, setEmployee] = useState(() => Store.getEmployeeByID(id)); //using function to get employee only once

  console.log(employee);

  return (
    <React.Fragment>
      <div id="main">
        <section className="ProfileSection">
          <h2>{employee.getFullName()}</h2>
          <input
            type="checkbox"
            checked={employee.onLeave}
            onChange={() => {
              console.log("change");
              let newEmployee = new Employee({
                ...employee,
                onLeave: !employee.onLeave,
              });
              setEmployee(newEmployee);
            }}
          ></input>
        </section>
      </div>
      <div id="side"></div>
    </React.Fragment>
  );
};

export default ProfilePage;
