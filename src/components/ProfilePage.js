import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Store from "../DataStorage";
import Employee from "../EmployeeClass";
import "./styles/ProfilePage.css";

const ProfilePage = ({ match, onEmployeeRemoved, onEdited }) => {
  const name = match.params.name;

  const [employee, setEmployee] = useState(() =>
    Store.getEmployeeByID(Number(name.slice(-1)))
  ); //using function to get employee only once
  const [editable, setEditable] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [showDeleteEmployeeDialog, setShowDeleteEmployeeDialog] = useState(
    false
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleChange = changes => {
    if (!editable) return; //if editable we proceed
    const newEmployee = new Employee({
      ...employee,
      ...changes,
    }); //merges existing employee object with the changes and makes new employee object
    setEmployee(newEmployee);
    setIsChanged(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (editable && isChanged) {
      //updating the employees array from local storage
      Store.updateEmployee(employee);
      onEdited();
    }
    setEditable(!editable);
    setIsChanged(false);
  };
  const handleEmployeeRemoved = () => {
    Store.removeEmployee(employee.id);
    onEmployeeRemoved(); // refresh employee list
  };

  const handleDetailsCopy = async () => {
    await navigator.clipboard.writeText(JSON.stringify(employee, undefined, 4));
    setCopied(true);
  };

  const inputClass = editable ? "edit" : "";
  return (
    <React.Fragment>
      <div id="main">
        <section className="ProfileSection">
          <h2 employeeid={employee.id}>{employee.getFullName()}</h2>
          {/* attribute for 'after' pseudo element's content */}
          <form onSubmit={handleSubmit}>
            <div className="profileRow">
              <label htmlFor="profile-Designation">Designation</label>
              <span className={inputClass}></span>
              <input
                id="profile-Designation"
                className={inputClass}
                readOnly={!editable}
                type="text"
                value={employee.designation}
                onChange={e =>
                  handleChange({ designation: e.target.value })
                }></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Gender">Gender</label>
              <span className={inputClass}></span>
              {editable ? ( //input element if not editable as select doesnt work as intended
                <select
                  readOnly={!editable}
                  id="profile-Gender"
                  className={inputClass}
                  value={employee.gender}
                  onChange={e => handleChange({ gender: e.target.value })}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <input
                  id="profile-Gender"
                  readOnly
                  type="text"
                  value={employee.gender}></input>
              )}
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Age">Age</label>
              <span className={inputClass}></span>
              <input
                id="profile-Age"
                className={inputClass}
                readOnly={!editable}
                type="number"
                value={employee.age}
                onChange={e => handleChange({ age: e.target.value })}></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Salary">Salary</label>
              <span className={inputClass}></span>
              <input
                id="profile-Salary"
                className={inputClass}
                readOnly={!editable}
                type="number"
                value={employee.salary}
                onChange={e =>
                  handleChange({ salary: e.target.value })
                }></input>
            </div>
            <div className="profileRow">
              <label htmlFor="onLeaveCheckBox">Available</label>
              <span className={"shortSpan " + inputClass}></span>
              <i
                className={`fas fa-${
                  employee.onLeave ? "times-circle" : "check-circle"
                }`}
                style={{
                  fontSize: "26px",
                  height: "26px",
                  width: "26px",
                  color: employee.onLeave ? "#ec0000" : "#014968",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleChange({ onLeave: !employee.onLeave })
                }></i>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Number">Number</label>
              <span className={inputClass}></span>
              <input
                id="profile-Number"
                className={inputClass}
                readOnly={!editable}
                type="number"
                min="999999999"
                max="9999999999"
                value={employee.number}
                onChange={e =>
                  handleChange({ number: e.target.value })
                }></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-Email">Email</label>
              <span className={inputClass}></span>
              <input
                id="profile-Email"
                className={inputClass}
                readOnly={!editable}
                type="email"
                value={employee.email}
                onChange={e => handleChange({ email: e.target.value })}></input>
            </div>
            <div className="profileRow">
              <label htmlFor="profile-EmployedOn">Employed On</label>
              <span className={inputClass}></span>
              <input
                id="profile-EmployedOn"
                className={inputClass}
                readOnly={true}
                type="text"
                value={employee.getFormattedDate()}></input>
            </div>
            <div className="buttonsGrpProfilePage">
              {window.screen.width > 480 ? (
                <span>
                  <span onClick={handleDetailsCopy}>
                    <i
                      className="fa fa-copy"
                      style={{ paddingRight: "3px" }}></i>
                    {copied ? "Copied!" : "Copy Employee details as JSON."}
                  </span>
                </span>
              ) : null}
              <button type="submit" className="sideButton">
                {editable ? "Save Details" : "Change Details"}
              </button>
              <button
                type="button"
                className="sideButton btn-deleteEmployee"
                onClick={() =>
                  setShowDeleteEmployeeDialog(!showDeleteEmployeeDialog)
                }>
                {showDeleteEmployeeDialog ? "Cancel" : "Remove Employee"}
              </button>
              {window.screen.width > 480 ? null : (
                <span>
                  <span onClick={handleDetailsCopy}>
                    <i
                      className="fa fa-copy"
                      style={{ paddingRight: "3px" }}></i>
                    {copied ? "Copied!" : "Copy Employee details as JSON."}
                  </span>
                </span>
              )}
            </div>
          </form>
        </section>
      </div>
      <div id="side">
        {showDeleteEmployeeDialog && (
          <div className="deleteEmployeeDialog">
            <h3>Are you sure you want to Remove this Employee?</h3>
            <Link
              to="/employees"
              className="sideButton"
              onClick={handleEmployeeRemoved}>
              Yes
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
