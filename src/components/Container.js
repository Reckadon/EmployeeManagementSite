import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Employees from "./EmployeesPage";
import TopNav from "./TopNav";
import Error404 from "./Error404";
import "./styles/container.css";

class Container extends Component {
  render() {
    return (
      <div id="container">
        <TopNav />
        <div id="flex-container">
          <div id="background">
            <div className="triangle1"></div>
            <div className="triangle2"></div>
          </div>
        </div>
        <div id="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/employees" component={Employees} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Container;
