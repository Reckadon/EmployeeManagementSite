import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "./TopNav";
import Error404 from "./Error404";
import LoadingSpinner from "./LoadingSpinner";
import "./styles/container.css";
const Dashboard = lazy(() => import("./Dashboard"));
const Employees = lazy(() => import("./EmployeesPage"));

class Container extends Component {
  componentDidMount() {
    console.log(document.getElementById("background").style);
  }
  render() {
    return (
      <div id="container">
        <div id="background">
          <div className="triangle1"></div>
          <div className="triangle2"></div>
        </div>
        <TopNav />
        <div id="content">
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<LoadingSpinner />}>
                <Dashboard />
              </Suspense>
            </Route>
            <Route exact path="/employees">
              <Suspense fallback={<LoadingSpinner />}>
                <Employees />
              </Suspense>
            </Route>
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Container;
