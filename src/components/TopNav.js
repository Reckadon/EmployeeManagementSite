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
            <span className="pageInfo">Dashboard</span>
          </Route>
          <Route exact path="/employees">
            <span className="pageInfo">Employees</span>
          </Route>
          <Route
            exact
            path="/employees/:name"
            component={({ match }) => (
              <span className="pageInfo">{this.getFormattedName(match)}</span>
            )}
          ></Route>
          <Route
            component={() => <span className="pageInfo">Page Not Found</span>}
          ></Route>
        </Switch>
        {this.getContent()}
        <span id="emptySpan"></span>
      </nav>
    );
  }
  getContent() {
    if (window.screen.width > 630) {
      return (
        <h1>
          Employee <em>Management</em> System
        </h1>
      );
    } else {
      return (
        <h1>
          E<em>M</em>S
        </h1>
      );
    }
  }
  showSideBar() {
    document.getElementById("navbar").classList.add("extended");
    let Element = document.getElementById("copyright");
    Element.style.transform = "translateX(0px)";
  }
  getFormattedName(match) {
    let name = match.params.name;

    if (isNaN(Number(name.slice(-1)))) return "Page Not Found";

    name = name.slice(0, -2);
    let formatted = name.slice(0, name.indexOf("-"));
    formatted += " " + name.slice(name.indexOf("-") + 1);
    return formatted;
  }
}

export default TopNav;
