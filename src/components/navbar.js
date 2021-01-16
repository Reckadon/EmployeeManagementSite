import React, { Component } from "react";
import "./styles/navbar.css";

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
        <a href="/">
          <span className="large fas fa-tasks"></span>
        </a>
        <ul>
          <a href="/">
            <li>
              <span className="small fas fa-home"></span>
              <h4>Home</h4>
            </li>
          </a>
          <a href="/employees">
            <li>
              <span className="small fas fa-users"></span>
              <h4>Employees</h4>
            </li>
          </a>
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
