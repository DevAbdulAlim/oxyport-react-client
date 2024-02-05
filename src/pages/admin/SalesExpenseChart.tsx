import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [400, 700, 300, 900, 500, 800, 200],
      backgroundColor: "rgba(0, 128, 0, 0.5)", // Dark green color
    },
    {
      label: "Dataset 2",
      data: [600, 300, 700, 100, 500, 200, 800],
      backgroundColor: "rgba(0, 255, 0, 0.5)", // Lighter green color
    },
  ],
};

const SalesExpenseChart = () => {
  return <Bar options={options} data={data} />;
};

export default SalesExpenseChart;
