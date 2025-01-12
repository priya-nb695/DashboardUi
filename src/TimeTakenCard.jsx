import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale, // For x-axis (categories)
    LinearScale,   // For y-axis (linear scale)
    BarElement,    // For bar chart elements
    Title,         // For chart title
    Tooltip,       // For tooltips
    Legend,        // For the legend
  } from 'chart.js';

  
  // Register required components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data for the bar chart
const barData = {
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "Accuracy",
      data: [80, 50, 65, 70, 60, 75, 90],
      backgroundColor: "rgba(103, 185, 243, 0.6)",
      borderColor: "rgba(103, 185, 243, 1)",
      borderWidth: 1,
    },
  ],
};
// Options for the bar chart
const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  
  const TimeTakenCard = () => {
    return (
      <>
        {/* Time Taken Card */}
      <Card sx={{ flex: "1 1 45%", minWidth: "300px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Time Taken
          </Typography>
          {[10, 4].map((scale, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <Box sx={{ position: "relative", height: "40px", marginBottom: 1 }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    width: "60%",
                    height: "10px",
                    backgroundColor: "red",
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "40%",
                    width: "20%",
                    height: "10px",
                    backgroundColor: "green",
                    zIndex: 2,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "-5px",
                    left: "50%",
                    width: "10px",
                    height: "20px",
                    backgroundColor: "purple",
                    borderRadius: "50%",
                    zIndex: 3,
                  }}
                />
              </Box>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
      </>
    )
  }
  
  export default TimeTakenCard
  