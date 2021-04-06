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
      this.retractMobileNavbar();
    }
  }
  retractMobileNavbar() {
    this.setState({ extended: false });
    document.getElementById("navbar").classList.remove("extended");
    let Element = document.getElementById("copyright");
    Element.style.transform = "translateX(-200px)";
    Element = document.getElementById("nav-overlay").style.visibility =
      "hidden";
    Element = document.getElementById("nav-overlay").style.opacity = "0";
  }

  retract() {
    if (window.screen.width < 480) {
      this.retractMobileNavbar();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="navbar" className={this.state.extended ? "extended" : ""}>
          <Link
            to="/"
            aria-label="Dashboard"
            title="Dashboard"
            onClick={() => {
              this.retract();
            }}>
            <span>
              <span className="large fas fa-tasks"></span>
            </span>
          </Link>
          <ul>
            <NavLink
              exact
              to="/"
              aria-label="Dashboard"
              title="Dashboard"
              onClick={() => {
                this.retract();
              }}>
              <li>
                <span>
                  <span className="small fas fa-digital-tachograph"></span>
                  <h4 className="navh4">Dashboard</h4>
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/employees"
              aria-label="Employees"
              title="Employees"
              onClick={() => {
                this.retract();
              }}>
              <li>
                <span>
                  <span className="small fas fa-users"></span>
                  <h4 className="navh4">Employees</h4>
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/settings"
              aria-label="Settings"
              title="Settings"
              onClick={() => {
                this.retract();
              }}>
              <li>
                <span>
                  <span className="small fas fa-cog"></span>
                  <h4 className="navh4">Settings</h4>
                </span>
              </li>
            </NavLink>
          </ul>
          <em id="copyright-em">
            <span id="copyright">&copy;Romit Mohane, 2021</span>
          </em>
          <span
            title={this.state.extended ? "Retract" : "Extend"}
            id="extendButton"
            tabIndex="0"
            role="button"
            aria-pressed={this.state.extended}
            onKeyDown={e => {
              if (e.code === "Enter" || e.code === "Space") this.extend();
            }}
            onClick={() => this.extend()}>
            <span id="chevron" className="small fas fa-chevron-right"></span>
          </span>
        </div>
        {/* Overlays the whole screen for modal like look */}
        <div
          id="nav-overlay"
          style={{
            visibility: this.state.extended ? "visible" : "hidden",
          }}
          onClick={() => this.retract()}></div>
      </React.Fragment>
    );
  }
}

export default NavBar;
