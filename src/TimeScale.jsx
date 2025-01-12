import React from 'react';
import { Box, Typography, Slider, Grid } from '@mui/material';

const marks = [
  { value: 0, label: '0 sec' },
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 40, label: '40' },
  { value: 50, label: '50 sec' },
];

const TimeScale = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 400, borderRadius: 4, padding: 3, boxShadow: 3, bgcolor: '#f9f9f9' }}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        ⏱️ Time Taken
      </Typography>

      {/* Scale 1 */}
      <Box sx={{ position: 'relative', marginBottom: 4 }}>
        <Slider
          defaultValue={25}
          step={1}
          marks={marks}
          min={0}
          max={50}
          sx={{
            '& .MuiSlider-rail': {
              height: 10,
              bgcolor: '#e0e0e0',
            },
            '& .MuiSlider-track': {
              height: 10,
              bgcolor: 'green',
            },
            '& .MuiSlider-thumb': {
              height: 20,
              width: 20,
              bgcolor: '#1976d2',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            left: '40%',
            width: '20%',
            height: '10px',
            bgcolor: 'red',
          }}
        />
      </Box>

      <Typography variant="body2" color="textSecondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      </Typography>

      {/* Scale 2 */}
      <Box sx={{ position: 'relative', marginTop: 4 }}>
        <Slider
          defaultValue={2}
          step={1}
          marks={[
            { value: 0, label: '0' },
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4 sec' },
          ]}
          min={0}
          max={4}
          sx={{
            '& .MuiSlider-rail': {
              height: 10,
              bgcolor: '#e0e0e0',
            },
            '& .MuiSlider-track': {
              height: 10,
              bgcolor: 'green',
            },
            '& .MuiSlider-thumb': {
              height: 20,
              width: 20,
              bgcolor: '#1976d2',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            left: '20%',
            width: '20%',
            height: '10px',
            bgcolor: 'red',
          }}
        />
      </Box>

      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      </Typography>
    </Box>
  );
};

export default TimeScale;
