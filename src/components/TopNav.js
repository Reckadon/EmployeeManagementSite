import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/topnav.css";

class TopNav extends Component {
  render() {
    return (
      <nav>
        <span
          onClick={() => this.showSideBar()}
          className="large fas fa-bars"
        ></span>
        <span className="pageInfo">
          {/* Dynamic header for page with Router  */}
          <Switch>
            <Route exact path="/">
              Dashboard
            </Route>
            <Route exact path="/employees">
              Employees
            </Route>
            <Route
              exact
              path="/employees/:name"
              component={({ match }) => this.checkParam(match)}
            ></Route>
            <Route>Page Not Found</Route>
          </Switch>
        </span>
        {this.getName()}
        <span id="emptySpan"></span>
      </nav>
    );
  }
  getName() {
    if (window.screen.width > 630) {
      return (
        <h1>
          Employee <em>Management</em> System
        </h1>
      );
    } else {
      return (
        <h1>
          E<em>M</em>S
        </h1>
      );
    }
  }
  showSideBar() {
    document.getElementById("navbar").classList.add("extended");
    let Element = document.getElementById("copyright");
    Element.style.transform = "translateX(0px)";
    Element = document.getElementById("nav-overlay").style.visibility =
      "visible";
    Element = document.getElementById("nav-overlay").style.opacity = "1";
  }
  checkParam(match) {
    let name = match.params.name;
    if (isNaN(Number(name.slice(-1)))) return "Page Not Found";
    return "Employee";
  }
}

export default TopNav;
