import React, { Component } from "react";
import NavBar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h1 style={{ margin: "10px" }}>Welcome</h1>
      </React.Fragment>
    );
  }
}
export default App;
