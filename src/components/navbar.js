import React, { Component } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    extended: false,
  };

  extend() {
    let Element;
    Element = document.getElementsByTagName("h4");
    for (const element of Element) {
      element.style.display = this.state.extended ? "none" : "inline";
    }
    Element = document.getElementById("chevron");
    Element.style.transform = this.state.extended
      ? "rotate(0deg)"
      : "rotate(180deg)";
    this.setState({ extended: !this.state.extended });
  }

  render() {
    return (
      <div id="navbar" className={this.getClass()}>
        <Link to="/">
          <span className="large fas fa-tasks"></span>
        </Link>
        <ul>
          <Link to="/">
            <li>
              <span className="small fas fa-digital-tachograph"></span>
              <h4>Dashboard</h4>
            </li>
          </Link>
          <Link to="/employees">
            <li>
              <span className="small fas fa-users"></span>
              <h4>Employees</h4>
            </li>
          </Link>
        </ul>
        <span id="extendButton">
          <span
            id="chevron"
            className="medium fas fa-chevron-right"
            onClick={() => this.extend()}
          ></span>
        </span>
      </div>
    );
  }

  getClass() {
    if (this.state.extended) return "extended";
    else return "";
  }
}

export default NavBar;
