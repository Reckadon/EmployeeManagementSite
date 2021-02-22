import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar";
import Container from "./components/Container";
import Store from "./DataStorage";
import "./fontawesome-web/css/solid.min.css";
import "./fontawesome-web/css/fontawesome.min.css";

class App extends Component {
  componentDidMount() {
    Store.initializeStore();
    this.linkManifest();
  }

  linkManifest() {
    const prefix = window.screen.width > 800 ? "" : "mobile-";
    document
      .getElementById("manifest-link")
      .setAttribute("href", `/${prefix}manifest.json`);
  }

  render() {
    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Container />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
