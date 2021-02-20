import React, { Component, lazy, Suspense } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import Store from "../DataStorage";
import Error404 from "./Error404";
import { Route, Switch } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
const ProfilePage = lazy(() => import("./ProfilePage"));

class Employees extends Component {
  //employees page handling employees list and user profiles from dynamic URIs
  state = {
    employees: [],
  };
  componentDidMount() {
    this.setState({ employees: Store.getEmployees() });
  }
  handleEmployeeAdded = () => {
    this.setState({ employees: Store.getEmployees() });
  };
  render() {
    return (
      <Switch>
        <Route exact path="/employees">
          {/* '/employees' */}
          <div id="main">
            <EmployeeList employees={this.state.employees} />
          </div>
          <div id="side">
            <AddEmployee onEmployeeAdded={this.handleEmployeeAdded} />
          </div>
        </Route>
        <Route
          exact
          path="/employees/:name"
          // '/employees/xyz' dynamic URIs
          component={({ match }) => (
            <Suspense fallback={<LoadingSpinner />}>
              {this.isParam(match) ? (
                <React.Fragment>
                  <div id="main">
                    <ProfilePage match={match} />
                  </div>
                  <div id="side"></div>
                </React.Fragment>
              ) : (
                <Error404 />
              )}
            </Suspense>
          )}
        ></Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    );
  }
  isParam(match) {
    let name = match.params.name;
    if (isNaN(Number(name.slice(-1)))) return false;
    return true;
  }
}

export default Employees;
