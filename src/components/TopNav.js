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
            <span>Dashboard</span>
          </Route>
          <Route exact path="/employees">
            <span>Employees</span>
          </Route>
        </Switch>
      </nav>
    );
  }
  showSideBar() {
    document.getElementById("navbar").classList.add("extended");
  }
}

export default TopNav;
