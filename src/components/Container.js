import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import TopNav from "./TopNav";
import "./styles/container.css";

class Container extends Component {
  state = {};

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
          </Switch>
        </div>
      </div>
    );
  }
}

export default Container;
