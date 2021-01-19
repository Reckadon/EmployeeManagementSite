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
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/employees" component={Employees} />
        </Switch>
      </div>
    );
  }
}

export default Container;
