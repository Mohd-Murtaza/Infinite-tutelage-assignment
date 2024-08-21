import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/chart.css";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function getBarThickness() {
  if (window.innerWidth < 480) {
    return 14; // Thinner bars for mobile screens
  } else {
    return 24; // Default bar thickness
  }
}
const Chart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Aug",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Sales",
        data: [816, 455, 1000, 250, 1220, 610, 700, 330, 1251, 450, 560, 150, 350],
        backgroundColor: "#AD8EDD",
        borderRadius: 4.8,
        barThickness: getBarThickness(),
        hoverBackgroundColor: "#bffb7abb",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      },
      tooltip: {
        backgroundColor: "#363636", // Tooltip background color
        titleColor: "#fff", // Tooltip title color
        bodyColor: "#fff", // Tooltip body text color
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on the x-axis
        },
        ticks: {
          color: "#98A2B3", // X-axis label font color
          font: {
            family: "Manrope", // X-axis font family
            size: 12, // X-axis font size
            weight: "500", // X-axis font weight
          },
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines on the y-axis
        },
        ticks: {
          min: 0, // Minimum value on the y-axis
          max: 1500, // Maximum value on the y-axis
          stepSize: 250, // Distance between each tick
          callback: function (value) {
            if(value==0){
              return value;
            }else{
              return "$"+value
            } // Add dollar sign to y-axis labels

          },
          color: "#98A2B3", // Y-axis label font color
          font: {
            family: "Manrope", // Y-axis font family
            size: 12, // Y-axis font size
            weight: "500", // Y-axis font weight
            lineHeight:"13.2px"
          },
        },
      },
    },
  };

  return (
    <div className="chartMainContainer">
      <div className="overviewDiv">
        <span>Overview</span>
        <div className="downloadDiv">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.89999 18.3H20.1V20.1H3.89999V18.3ZM12.9 13.0548L18.3639 7.59L19.6365 8.8626L12 16.5L4.36349 8.8635L5.63609 7.59L11.1 13.053V3H12.9V13.0548Z"
                fill="#AD8EDD"
              />
            </svg>
          </div>
          <span>Download Report</span>
        </div>
      </div>
      <div className="monthAndYearDiv">
        <span>Monthly</span>
        <span>Yearly</span>
      </div>
      <div className="chartContainer">
        <Bar className="chartBar" data={data} options={options}  />
      </div>
    </div>
  );
};

export default Chart;
