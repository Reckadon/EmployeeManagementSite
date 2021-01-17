import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Employees from "./Employees";

class Container extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/employees" component={Employees} />
        </Switch>
      </div>
    );
  }
}

export default Container;
