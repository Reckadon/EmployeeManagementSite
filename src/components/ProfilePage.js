import React, { useState } from "react";
import Store from "../DataStorage";
import Employee from "../EmployeeClass";
import "./styles/ProfilePage.css";

const ProfilePage = ({ match }) => {
  const name = match.params.name;
  const id = Number(name.slice(-1));

  const [employee, setEmployee] = useState(() => Store.getEmployeeByID(id)); //using function to get employee only once
  const [editable, setEditable] = useState(false);
  const [showDeleteEmployeeDialog, setShowDeleteEmployeeDialog] = useState(
    false
  );

  const handleChange = (changes) => {
    console.log("change");
    const newEmployee = new Employee({
      ...employee,
      ...changes,
    }); //merges existing employee object with the changes and makes new employee object
    setEmployee(newEmployee);
  };

  return (
    <React.Fragment>
      <div id="main">
        <section className="ProfileSection">
          <h2 employeeid={employee.id}>{employee.getFullName()}</h2>
          {/* attribute for 'after' pseudo element's content */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditable(!editable);
            }}
          >
            <div className="profileRow">
              <label htmlFor="profile-Designation">Designation</label>
              <input
                id="profile-Designation"
                readOnly={!editable}
                type="text"
                value={employee.designation}
                onChange={
                  editable
                    ? (e) => handleChange({ designation: e.target.value }) //if editable we add a callback
                    : null
                }
              ></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Gender">Gender</label>
              {editable ? ( //input element if not editable as select doesnt work as intended
                <select
                  readOnly={!editable}
                  id="profile-Gender"
                  style={{ height: "21px" }}
                  value={employee.gender}
                  onChange={
                    editable
                      ? (e) => handleChange({ gender: e.target.value }) //if editable we add a callback
                      : null
                  }
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <input
                  id="profile-Gender"
                  readOnly
                  type="text"
                  value={employee.gender}
                ></input>
              )}
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Age">Age</label>
              <input
                id="profile-Age"
                readOnly={!editable}
                type="number"
                value={employee.age}
                onChange={
                  editable
                    ? (e) => handleChange({ age: e.target.value }) //if editable we add a callback
                    : null
                }
              ></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Salary">Salary</label>
              <input
                id="profile-Salary"
                readOnly={!editable}
                type="number"
                value={employee.salary}
                onChange={
                  editable
                    ? (e) => handleChange({ salary: e.target.value }) //if editable we add a callback
                    : null
                }
              ></input>
            </div>
            <div className="profileRow">
              <label htmlFor="onLeaveCheckBox">Available</label>
              <input
                id="onLeaveCheckBox"
                readOnly={!editable}
                type="checkbox"
                checked={!employee.onLeave}
                onChange={
                  editable
                    ? () => handleChange({ onLeave: !employee.onLeave }) //if editable we add a callback
                    : null
                }
              ></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Number">Number</label>
              <input
                id="profile-Number"
                readOnly={!editable}
                type="number"
                min="999999999"
                max="9999999999"
                value={employee.number}
                onChange={
                  editable
                    ? (e) => handleChange({ number: e.target.value }) //if editable we add a callback
                    : null
                }
              ></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Email">Email</label>
              <input
                id="profile-Email"
                readOnly={!editable}
                type="email"
                value={employee.email}
                onChange={
                  editable
                    ? (e) => handleChange({ email: e.target.value }) //if editable we add a callback
                    : null
                }
              ></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-EmployedOn">Employed On</label>
              <input
                id="profile-EmployedOn"
                readOnly={true}
                type="text"
                value={employee.dateEmployed}
              ></input>
            </div>
            <div className="buttonsGrpProfilePage">
              <button type="submit" className="sideButton">
                {editable ? "Save Details" : "Change Details"}
              </button>
              <button
                type="button"
                className="sideButton btn-deleteEmployee"
                onClick={() =>
                  setShowDeleteEmployeeDialog(!showDeleteEmployeeDialog)
                }
              >
                {showDeleteEmployeeDialog ? "Cancel" : "Fire Employee"}
              </button>
            </div>
          </form>
        </section>
      </div>
      <div id="side">
        <div
          className="deleteEmployeeDialog"
          style={{ display: showDeleteEmployeeDialog ? "flex" : "none" }}
        >
          <h3>Are you sure you want to fire this employee?</h3>
          <button className="sideButton">Yes</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
