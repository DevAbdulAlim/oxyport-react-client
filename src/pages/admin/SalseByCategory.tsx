import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 9, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(0, 128, 0, 0.2)", // Dark green color
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(0, 255, 0, 0.2)", // Darker green color
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(0, 128, 0, 1)", // Dark green color
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(0, 255, 0, 1)", // Darker green color
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function SalesByCategory() {
  const options = {
    maintainAspectRatio: false, // Set this to false for responsiveness
    responsive: true, // Enable responsiveness
  };

  return <Pie data={data} options={options} />;
}
