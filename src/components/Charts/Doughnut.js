import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../styles/dashboard.css";

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Above 20", "Above 40", "Above 60"],
          datasets: [
            {
              label: "Age Graph",
              data: [267,173,89],
              backgroundColor: [
                "rgb(58, 124, 165)",
                "rgb(4, 139, 168)",
                "rgb(47, 102, 144)",
              ],
              hoverOffset: 4
            },
          ],
        }}
        height={300}
        width={300}
        style={{
          marginBottom:"20px",
          textAlign:"center",
        }}
        options={{
            maintainAspectRatio:false,
        }}
      />
    </div>
  );
};

export default DoughnutChart;
