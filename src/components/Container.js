import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "./TopNav";
import Error404 from "./Error404";
import LoadingSpinner from "./LoadingSpinner";
import "./styles/container.css";
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Employees = lazy(() => import("./Employees/EmployeesPage"));
const Settings = lazy(() => import("./Settings/Settings.jsx"));

class Container extends Component {
  //handles paths '/' and '/employees' along with any unknown paths, and background
  render() {
    return (
      <div id="container">
        <div id="background">
          <div className="triangle1"></div>
          <div className="triangle2"></div>
        </div>
        <TopNav />
        <div id="content">
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/employees">
                <Employees />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route component={Error404} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default Container;
