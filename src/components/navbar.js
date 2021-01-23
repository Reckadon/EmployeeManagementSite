import React, { Component } from "react";
import "./styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    extended: false,
  };

  extend() {
    if (window.screen.width > 480) {
      let Element;
      Element = document.getElementsByClassName("navh4");
      for (const element of Element) {
        element.style.display = this.state.extended ? "none" : "inline";
      }

      Element = document.getElementById("copyright");
      Element.style.transform = this.state.extended
        ? "translateX(-200px)"
        : "translateX(0px)";

      Element = document.getElementById("chevron");
      Element.style.transform = this.state.extended
        ? "rotate(0deg)"
        : "rotate(180deg)";
      this.setState({ extended: !this.state.extended });
    } else {
      this.setState({ extended: false });
      document.getElementById("navbar").classList.remove("extended");
      let Element = document.getElementById("copyright");
      Element.style.transform = "translateX(-200px)";
    }
  }
  retract() {
    if (window.screen.width < 480) {
      let Element = document.getElementById("copyright");
      Element.style.transform = "translateX(-200px)";
      this.setState({ extended: false });
      document.getElementById("navbar").classList.remove("extended");
    }
  }

  render() {
    return (
      <div id="navbar" className={this.getClass()}>
        <Link
          to="/"
          onClick={() => {
            this.retract();
          }}
        >
          <span>
            <span className="large fas fa-tasks"></span>
          </span>
        </Link>
        <ul>
          <NavLink
            exact
            to="/"
            onClick={() => {
              this.retract();
            }}
          >
            <li>
              <span>
                <span className="small fas fa-digital-tachograph"></span>
                <h4 className="navh4">Dashboard</h4>
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/employees"
            onClick={() => {
              this.retract();
            }}
          >
            <li>
              <span>
                <span className="small fas fa-users"></span>
                <h4 className="navh4">Employees</h4>
              </span>
            </li>
          </NavLink>
        </ul>
        <em id="copyright-em">
          <span id="copyright">&copy;Romit Mohane, 2021</span>
        </em>
        <span id="extendButton" onClick={() => this.extend()}>
          <span id="chevron" className="small fas fa-chevron-right"></span>
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
