import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar";
import Container from "./components/Container";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Container />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
