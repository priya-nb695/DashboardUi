import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
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

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data for the bar chart
const barData = {
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "Accuracy",
      data: [80, 50, 65, 70, 60, 75, 90],
      backgroundColor: "rgb(97 80 161)",
      borderColor: " rgb(97 80 161);",
      borderWidth: 1,
      barThickness: 20, // Adjust bar thickness (fixed width)
      maxBarThickness: 20,
      borderRadius:5
    },
  ],
};

// const barOptions = {
//   responsive: true,
//   scales: {
//     x: {
//       categoryPercentage: 0.1, 
//       barPercentage: 0.1,    },
//     y: {
//       beginAtZero: true,
//       max: 100,
//     },
//   },
// };
const barOptions = {
  responsive: true,
  scales: {
    x: {
      categoryPercentage: 0.5, // Adjust space between categories
      barPercentage: 0.8, // Adjust space between bars
      title: {
        display: true, // Enable the title for the X-axis
        text: "Slots", // X-axis label
        font: {
          size: 14, // Font size
        },
        color: "#333", // Font color
      },
    },
    y: {
      beginAtZero: true,
      max: 100,
      title: {
        display: true, // Enable the title for the Y-axis
        text: "Accuracy", // Y-axis label
        font: {
          size: 14, // Font size
        },
        ticks: {
          stepSize: 25, // Set the interval between Y-axis values
          callback: function (value) {
            return value + "%"; // Add a '%' symbol to the Y-axis labels
          },
        },
        color: "#333", // Font color
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Disable the legend (optional, remove if you want it)
    },
  },
};


const CompAccuCard = () => {
  return (
    <Card sx={{ flex: "1 1 45%", maxWidth: "500px" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Compare Accuracy
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2, }}>
          {["10 MIN", "15 MIN", "30 MIN", "45 MIN"].map((slot, index) => (
            <Box
              key={index}
              sx={{
                padding: "5px 10px",
                backgroundColor: "#e0f7fa",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              {slot}
            </Box>
          ))}
        </Box>
        <Bar data={barData} options={barOptions} />
      </CardContent>
    </Card>
  );
};

export default CompAccuCard;
