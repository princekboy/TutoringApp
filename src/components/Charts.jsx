import React from "react";
import { Bar } from "react-chartjs-2";

import Chart from 'chart.js/auto';

const Charts = () => {
  const barChartData = {
    labels: ["August", "September", "November"],
    datasets: [
      {
        data: [10, 9, 6],
        label: "All Appointment",
        borderColor: "#3333ff",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true
      },
      {
        data: [7, 4, 5],
        label: "Completed Tutorials",
        borderColor: "#ff3333",
        backgroundColor: "#00b74a",
        fill: true
      }
    ]
  };

  const barChart = (
    <Bar
      type="bar"
      width={80}
      height={30}
      options={{
        title: {
          display: true,
          text: "Appointments Data",
          fontSize: 15
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default Charts;