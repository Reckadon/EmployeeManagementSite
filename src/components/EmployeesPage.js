import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import Store from "../DataStorage";
import Error404 from "./Error404";
import FilterWidget from "./FilterWidget";
import LoadingSpinner from "./LoadingSpinner";
const ProfilePage = lazy(() => import("./ProfilePage"));

class Employees extends Component {
  //employees page handling employees list and user profiles from dynamic URIs
  state = {
    employees: [],
    filteredEmployees: [],
    filter: "none",
  };
  load() {
    this.setState({ employees: Store.getEmployees() }, this.filter);
  }

  filter() {
    const filter = this.state.filter;
    switch (
      filter //handle different filters
    ) {
      case "none":
        this.setState({ filteredEmployees: this.state.employees });
        break;

      case "available": {
        const filteredEmployees = this.state.employees.filter(
          emp => !emp.onLeave
        );
        this.setState({ filteredEmployees });
        break;
      }

      case "male": {
        const filteredEmployees = this.state.employees.filter(
          emp => emp.gender === "male"
        );
        this.setState({ filteredEmployees });
        break;
      }

      case "female": {
        const filteredEmployees = this.state.employees.filter(
          emp => emp.gender === "female"
        );
        this.setState({ filteredEmployees });
        break;
      }

      default:
        this.setState({ filteredEmployees: this.state.employees });
        break;
    }
  }

  componentDidMount() {
    this.load();
  }
  refresh = () => {
    this.load();
  };
  handleFilterChange = filter => {
    this.setState({ filter }, () => {
      this.filter();
    });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/employees">
          {/* '/employees' */}
          <div id="main">
            <EmployeeList
              employees={this.state.filteredEmployees}
              isEmpty={this.state.employees.length === 0}
            />
          </div>
          <div id="side">
            <FilterWidget
              value={this.state.filter}
              onChange={this.handleFilterChange}
            />
            <AddEmployee onEmployeeAdded={this.refresh} />
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
                  <ProfilePage
                    match={match}
                    onEmployeeRemoved={this.refresh}
                    onEdited={this.refresh}
                  />
                </React.Fragment>
              ) : (
                <Error404 />
              )}
            </Suspense>
          )}></Route>
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
