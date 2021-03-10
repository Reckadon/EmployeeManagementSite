import React, { Component } from "react";
import "./styles/employees.css";
import Employee from "../EmployeeClass.js";
import Store from "../DataStorage";

class AddEmployee extends Component {
  state = {
    formVisible: false,
    showEmployeeAddedAlert: false,
    fname: "",
    lname: "",
    age: "",
    salary: "",
    designation: "",
    gender: "male",
    number: "",
    email: "",
  };

  showForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
    this.resetValues();
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //creating employee object
    const {
      fname,
      lname,
      age,
      salary,
      designation,
      gender,
      number,
      email,
    } = this.state;
    const employee = new Employee({
      id: Store.getID(),
      fName: fname,
      lName: lname,
      age,
      salary,
      designation,
      gender,
      number,
      email,
      onLeave: false,
      dateEmployed: "now",
    });
    Store.addEmployee(employee);
    event.preventDefault();
    //reseting values
    this.resetValues();
    //retracting form
    this.setState({ formVisible: false });
    this.props.onEmployeeAdded();
    //showing alert
    this.setState({ showEmployeeAddedAlert: true }, () => {
      setTimeout(() => {
        this.setState({ showEmployeeAddedAlert: false });
      }, 3000);
    });
  };

  resetValues() {
    for (const x in this.state) {
      if (x !== "formVisible" && x !== "showEmployeeAddedAlert") {
        this.setState({
          [x]: "",
        });
      }
      if (x === "gender") {
        this.setState({ [x]: "male" });
      }
    }
  }

  render() {
    const tabIndex = this.state.formVisible ? "0" : "-1";
    return (
      <React.Fragment>
        <button
          className="sideButton"
          id="addEmployeeBtn"
          onClick={this.showForm}
        >
          <span className="fas fa-user"></span>
          <span>Add New Employee</span>
          <span
            className="fas fa-sort-down"
            style={{
              transform: this.state.formVisible
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }}
          ></span>
        </button>
        <div
          id="addEmployeeForm"
          className={this.state.formVisible ? "active" : null}
        >
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fname">First Name:</label>
            <input
              value={this.state.fname}
              onChange={this.handleChange}
              required
              tabIndex={tabIndex}
              autoComplete={"" + Math.random()}
              type="text"
              id="fname"
            />
            <label htmlFor="lname">Last Name:</label>
            <input
              value={this.state.lname}
              onChange={this.handleChange}
              required
              tabIndex={tabIndex}
              autoComplete={"" + Math.random()}
              type="text"
              id="lname"
            />
            <label htmlFor="age">Age:</label>
            <input
              value={this.state.age}
              onChange={this.handleChange}
              required
              tabIndex={tabIndex}
              autoComplete={"" + Math.random()}
              type="number"
              min="0"
              id="age"
            />
            <label htmlFor="salary">Salary:</label>
            <input
              value={this.state.salary}
              onChange={this.handleChange}
              required
              tabIndex={tabIndex}
              autoComplete={"" + Math.random()}
              type="number"
              min="0"
              id="salary"
            />
            <label htmlFor="designation">Designation:</label>
            <input
              value={this.state.designation}
              onChange={this.handleChange}
              required
              tabIndex={tabIndex}
              autoComplete={"" + Math.random()}
              type="text"
              id="designation"
            />
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              tabIndex={tabIndex}
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="number">Phone Number: (10 digit)</label>
            <input
              value={this.state.number}
              onChange={this.handleChange}
              required
              tabIndex={tabIndex}
              autoComplete={"" + Math.random()}
              type="number"
              min="999999999"
              max="9999999999"
              id="number"
            />
            <label htmlFor="email">Email Address:</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              required
              tabIndex={tabIndex}
              autoComplete={"" + Math.random()}
              type="email"
              min="0"
              id="email"
            />
            <input
              tabIndex={tabIndex}
              id="addBtnInput"
              type="submit"
              value="Add Employee"
            />
          </form>
        </div>
        <div
          id="alertAdded"
          style={{
            display: this.state.showEmployeeAddedAlert ? "block" : "none",
          }}
        >
          <h4 className="alertH4">Employee Added</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default AddEmployee;
