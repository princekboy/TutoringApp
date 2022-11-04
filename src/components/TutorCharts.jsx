import React from "react";
import { Bar } from "react-chartjs-2";

export default function TutorCharts () {
  const barChartData = {
    labels: ["August", "September", "November"],
    datasets: [
      {
        data: [2, 5, 4],
        label: "Pending Appointment",
        borderColor: "#3333ff",
        backgroundColor: "#ffa900",
        fill: true
      },
      {
        data: [7, 4, 5],
        label: "Active Appointments",
        borderColor: "#ff3333",
        backgroundColor: "#1266f1",
        fill: true
      },
      {
        data: [5, 3, 6],
        label: "Completed Appointments",
        borderColor: "#3333ff",
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