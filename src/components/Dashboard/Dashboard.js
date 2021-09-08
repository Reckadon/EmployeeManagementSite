import React, { Component } from "react";
import "../styles/dashboard.css";
import DoughnutChart from "../Charts/Doughnut";
import BarChart from "../Charts/Barchart";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="mainContainer">
          <section className="subContainer1">
            <div className="keyCont">
              <h4 className="keyContTitle"><i>Total Requests</i></h4>
              <h2 className="keyContValue">5680</h2>
            </div>
            <div className="keyCont">
              <h4 className="keyContTitle"><i>Pending Requests</i></h4>
              <h2 className="keyContValue">17</h2>
            </div>
            <div className="keyCont">
              <h4 className="keyContTitle"><i>Gender Ratio</i></h4>
              <h2 className="keyContValue">16:10</h2>
            </div>
            <div className="keyCont">
              <h4 className="keyContTitle"><i>Total Users</i></h4>
              <h2 className="keyContValue">25647</h2>
            </div>
          </section>
          <div className="subContainerWrapper">
            <section className="subContainer2">
              <BarChart/>
            </section>
            <section className="subContainer3">
              <h1 className="ageGraphLabel">Age Graph</h1>
              <DoughnutChart />
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
