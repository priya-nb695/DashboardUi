import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const mockData = [
  { slot: 1, accuracy: 80 },
  { slot: 2, accuracy: 90 },
  { slot: 3, accuracy: 75 },
  { slot: 4, accuracy: 85 },
  { slot: 5, accuracy: 60 },
  { slot: 6, accuracy: 70 },
  { slot: 7, accuracy: 95 },
];

const CompareAccuracyChart = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2, height: '500px' }}>
      <Typography variant="h6" gutterBottom>
        Compare Accuracy
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="slot" label={{ value: 'Slots', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="accuracy" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default CompareAccuracyChart;
