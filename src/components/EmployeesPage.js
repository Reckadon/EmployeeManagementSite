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
    filter: "none",
    filteredEmployees: [],
    sort: "none",
    sortedEmployees: [],
  };
  load() {
    this.setState({ employees: Store.getEmployees() }, this.filter);
  }

  filter() {
    const filter = this.state.filter;
    let filteredEmployees;
    switch (
      filter //handle different filters
    ) {
      case "none":
        filteredEmployees = this.state.employees;
        break;

      case "available": {
        filteredEmployees = this.state.employees.filter(emp => !emp.onLeave);
        break;
      }

      case "male": {
        filteredEmployees = this.state.employees.filter(
          emp => emp.gender === "male"
        );
        break;
      }

      case "female": {
        filteredEmployees = this.state.employees.filter(
          emp => emp.gender === "female"
        );
        break;
      }

      default:
        filteredEmployees = this.state.employees;
        break;
    }
    this.setState({ filteredEmployees }, this.sort);
  }

  sort() {
    const sort = this.state.sort;
    let sortedEmployees;
    const filteredEmployees = [...this.state.filteredEmployees];
    switch (
      sort //handle different sorts
    ) {
      case "none": {
        sortedEmployees = filteredEmployees;
        break;
      }

      case "salary-a": {
        sortedEmployees = filteredEmployees.sort(
          (a, b) => Number(a.salary) - Number(b.salary)
        );
        break;
      }

      case "salary-d": {
        sortedEmployees = filteredEmployees.sort(
          (a, b) => Number(b.salary) - Number(a.salary)
        );
        break;
      }

      case "age-a": {
        sortedEmployees = filteredEmployees.sort(
          (a, b) => Number(a.age) - Number(b.age)
        );
        break;
      }

      case "age-d": {
        sortedEmployees = filteredEmployees.sort(
          (a, b) => Number(b.age) - Number(a.age)
        );
        break;
      }

      default:
        sortedEmployees = filteredEmployees;
        break;
    }
    this.setState({ sortedEmployees });
  }

  componentDidMount() {
    this.load();
  }
  refresh = () => {
    this.load();
  };
  handleFilterChange = filter => {
    this.setState({ filter }, this.filter);
  };
  handleSortChange = sort => {
    this.setState({ sort }, this.sort);
  };

  render() {
    return (
      <Switch>
        <Route exact path="/employees">
          {/* '/employees' */}
          <div id="main">
            <EmployeeList
              employees={this.state.sortedEmployees}
              isEmpty={this.state.employees.length === 0}
            />
          </div>
          <div id="side">
            <FilterWidget
              filter={this.state.filter}
              onFilterChange={this.handleFilterChange}
              sort={this.state.sort}
              onSortChange={this.handleSortChange}
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
