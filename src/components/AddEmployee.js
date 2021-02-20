import React, { Component } from "react";
import "./styles/employees.css";
import Employee from "../EmployeeClass.js";
import Store from "../DataStorage";

class AddEmployee extends Component {
  state = {
    formVisible: false,
    fname: "",
    lname: "",
    age: "",
    salary: "",
    designation: "",
    gender: "male",
    number: "",
    email: "",
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
    const employee = new Employee(
      Store.getID(),
      fname,
      lname,
      age,
      salary,
      designation,
      gender,
      number,
      email,
      false,
      "now"
    );
    Store.addEmployee(employee);
    event.preventDefault();
    //reseting values
    for (const x in this.state) {
      if (x !== "formVisible") {
        this.setState({
          [x]: "",
        });
      }
    }
    //retracting form
    this.setState({ formVisible: false });
    this.props.onEmployeeAdded();
    //showing alert
    document.getElementById("alertAdded").style.display = "block";
    setTimeout(() => {
      document.getElementById("alertAdded").style.display = "none";
    }, 3000);
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="sideButton"
          id="addEmployeeBtn"
          onClick={() => this.showForm()}
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
              autoComplete={"" + Math.random()}
              type="text"
              id="fname"
            />
            <label htmlFor="lname">Last Name:</label>
            <input
              value={this.state.lname}
              onChange={this.handleChange}
              required
              autoComplete={"" + Math.random()}
              type="text"
              id="lname"
            />
            <label htmlFor="age">Age:</label>
            <input
              value={this.state.age}
              onChange={this.handleChange}
              required
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
              autoComplete={"" + Math.random()}
              type="text"
              id="designation"
            />
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="number">Phone Number:</label>
            <input
              value={this.state.number}
              onChange={this.handleChange}
              required
              autoComplete={"" + Math.random()}
              type="number"
              min="0"
              id="number"
            />
            <label htmlFor="email">Email Address:</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              required
              autoComplete={"" + Math.random()}
              type="email"
              min="0"
              id="email"
            />
            <input id="addBtnInput" type="submit" value="Add Employee" />
          </form>
        </div>
        <div id="alertAdded">
          <h4 className="alertH4">Employee Added</h4>
        </div>
      </React.Fragment>
    );
  }
  showForm() {
    this.setState({ formVisible: !this.state.formVisible });
  }
}

export default AddEmployee;
