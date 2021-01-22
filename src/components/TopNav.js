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
        <Switch>
          <Route exact path="/">
            <span className="pageInfo">Dashboard</span>
          </Route>
          <Route exact path="/employees">
            <span className="pageInfo">Employees</span>
          </Route>
        </Switch>
        {this.getContent()}
        <span id="emptySpan"></span>
      </nav>
    );
  }
  getContent() {
    if (window.screen.width > 480) {
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
  }
}

export default TopNav;
