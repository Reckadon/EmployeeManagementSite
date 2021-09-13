import React from "react";
import { Bar } from "react-chartjs-2";
import "../Dashboard/dashboard.css";

const BarChart = () => {
  return (
    <div className="barGraph">
      <Bar
        data={{
          labels: ["2017", "2018", "2019", "2020", "2021"],
          datasets: [
            {
              label: "Total Revenue In Respective Year",
              data: [7679970, 9702300, 10574629, 9623810, 15173722],
              backgroundColor: [
                "rgb(35, 100, 170)",
                "rgb(54, 162, 235)",
                "rgb(4, 53, 101)",
                "rgb(12, 98, 145)",
                "rgb(45, 147, 173)",
              ],
            },
          ],
        }}
        height={300}
        width={700}
        style={{
          marginBottom: "20px",
          textAlign: "center",
        }}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
